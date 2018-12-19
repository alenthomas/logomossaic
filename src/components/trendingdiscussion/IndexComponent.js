import lodash from 'lodash';
import randomColor from 'randomcolor';
import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';

import { watchWordcloud } from '../../Services.js'
import { handleError, getQueryString } from '../../Helper';
import RegularLayout from "./../layout/Regular.js";
import { timeoutCollection } from 'time-events-manager';

import './TrendingDiscussion.css';

const MAX_WORDS = 150;

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.cloudDimensions = {w: window.innerWidth - 200, h: window.innerHeight - 200}

    this.state = {
      trendingDiscussions: []
    };
  }

  loadData = (data) => {
    this.setState({trendingDiscussions: data});
  }

  componentWillMount() {
    let params = getQueryString(this.props.location.search);
    watchWordcloud(params.ctag, params.filter, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchWordcloud(params.ctag, params.filter, this.loadData, handleError);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  getData() {
    let topXWords = lodash(this.state.trendingDiscussions).take(MAX_WORDS);

    let countOfTopXWords = topXWords.map('count').reduce(lodash.add);
    let logOfCount = Math.log(countOfTopXWords);

    return topXWords.map((datum, i) => {
      let normalizedCount = Math.round((Math.log(datum.count) / logOfCount) * (MAX_WORDS - i));

      return {text: datum.word, value: normalizedCount};
    }).filter((datum) => {
      return lodash.size(datum.text) > 1;
    }).value();
  }

  getColors() {
    return lodash.times(MAX_WORDS, () => randomColor({
      // hue: lodash.sample(["red","yellow","green"]),
      hue: "monochrome",
      luminosity: "light"
    }));
  }

  render() {
    const data = this.getData();
    const colors = this.getColors();
    const { trendingdiscussion: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="trending-discussion"
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="dashboard-content">
          <WordCloud
            className="word-cloud"
            data={data}
            width={this.cloudDimensions.w}
            height={this.cloudDimensions.h}
            font={"CiscoSansThin"}
            padding={(_, idx) => Math.round(((MAX_WORDS - idx) / MAX_WORDS) * 22) }
            colors={colors}
            color={lodash(colors).first()}
            minSize={20}/>
        </div>
      </RegularLayout>
    )
  }
}

export default IndexComponent;
