import React, {Component} from 'react';
import lodash from 'lodash';

import {getTweetStats, getTopTweets, getTopHashtags} from '../../Services.js';
import StatsView from './StatsView.js';
import RegularLayout from "./../layout/Regular.js";
import { handleError } from '../../Helper.js';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {},
      tweets: [],
      hashtags: [],
      dataLoaded: false
    };
  }

  componentWillMount() {
    const { tweetcounts: componentConfig } = this.props.config;
    getTweetStats((stats) => {
      this.setState({stats: stats})
    }, handleError)
    getTopTweets((tweets) => {
      let topTweets = tweets || []
      this.setState({tweets: topTweets.slice(0,3)})
    }, handleError)
    getTopHashtags(componentConfig.filterHashtags, (hashtags = []) => {
      this.setState({hashtags: hashtags.slice(0,3)})
    }, handleError)
  }

  isReady() {
    let {stats, tweets, hashtags} = this.state;
    return !lodash.isEmpty(stats) && !lodash.isEmpty(tweets) && !lodash.isEmpty(hashtags);
  }

  render() {
    if(!this.isReady()) { return false }
    const {stats, tweets, hashtags} = this.state;
    const { tweetcounts: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={true}
        config={this.props.config}
        className="stats"
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}>
          <StatsView stats={stats} tweets={tweets} hashtags={hashtags}/>
      </RegularLayout>
    )
  }
}

export default IndexComponent;