import React, { Component } from 'react';
import lodash from 'lodash';

import StatItem from './StatItem.js';
import TopTweets from './TopTweets.js';
import StatsData from './StatsData.js';

import './stats.css';

export const TIME_PER_SLIDE = 18000

class StatsView extends Component {

  constructor(props) {
    super(props);
    this.statsData = new StatsData()
    this.state = {
      data: this.statsData.get()
    }
  }

  componentDidMount() {
    let {stats, tweets, hashtags} = this.props;
    this.loadStats(stats, tweets, hashtags);
    this.swapper = setInterval(this.swapGroup.bind(this), TIME_PER_SLIDE);
  }

  componentWillUnmount() {
    clearTimeout(this.swapper);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let {stats, tweets, hashtags} = nextProps;
    this.loadStats(stats, tweets, hashtags);
  }

  loadStats(stats, tweets, hashtags) {
    this.statsData.loadStats(stats)
    this.statsData.loadTopHashtags(hashtags)
    this.statsData.loadTopTweets(tweets)
    this.setState({data: this.statsData.get()})
  }

  swapGroup() {
    this.statsData.next();
    this.setState({data: this.statsData.get()})
  }

  makeStatGroup(dataToShow) {
    if (dataToShow.type === "stat" || dataToShow.type === "tag") {
      let maxValue = this.getMaxValue(dataToShow.values)
      let delay = 0
      return lodash.map(dataToShow.values, (value, key) => {
        delay+=2000;
        return <StatItem stat={value} arcPercent={value.count/maxValue} showAfter={delay} hideAfter={11000} key={key}/>;
      })
    }
    if (dataToShow.type === "tweet") {
      return <TopTweets tweets={dataToShow.values}/>
    }
  }

  getMaxValue(values) {
    return lodash(values).map(k => k.count).max()
  }

  render() {
    let dataToShow = this.state.data;
    if(!dataToShow) { return false }
    
    return (
      <div>
        <div className="content">
          <div className="group">
            {this.makeStatGroup(dataToShow)}
          </div>
        </div>
      </div>
    )
  }
}

export default StatsView;