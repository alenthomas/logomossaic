import lodash from 'lodash';
import React, { Component } from 'react';

import { watchLeaderboard } from '../../Services.js'

import RankedTweeterCard from "./RankedTweeterCard.js";
import TweeterCard from "./TweeterCard.js";
import RegularLayout from "./../layout/Regular.js";

import './Leaderboard.css';
import { handleError } from '../../Helper.js';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTweeters: []
    };
  }

  loadData = (data) => {
    this.setState({allTweeters: data});
  }

  componentWillMount() {
    watchLeaderboard(this.loadData, handleError);
  }

  getAllTweeters() {
    return lodash(this.state.allTweeters).sortBy(["count", "name"]).reverse().value();
  }

  getTopThreeTweeters() {
    var allTweeters = this.getAllTweeters();

    return lodash.take(allTweeters, 3);
  }

  getRemainingTweeters() {
    var allTweeters = this.getAllTweeters();
    var restOfTweets = (window.innerHeight > 640) ? 8 : 4;
    return lodash(allTweeters).drop(3).take(restOfTweets).value();
  }

  render() {
    const { leaderboard: componentConfig } = this.props.config;
    var allTweeters = this.getAllTweeters();

    var topThreeTweeters = this.getTopThreeTweeters();
    var remainingTweeters = this.getRemainingTweeters();

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(allTweeters)}
        config={this.props.config}
        className="leaderboard"
        title={componentConfig.title}
        shortTitle={"Leaderboard"}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="dashboard-content leaderboard-cards">
          {
            lodash.map(topThreeTweeters, (tweeter, index) => {
              return <RankedTweeterCard key={`${tweeter.handle}${index}`} index={index} tweeter={tweeter}/>;
            })
          }
          {
            lodash.map(remainingTweeters, (tweeter, index) => {
              return <TweeterCard key={`${tweeter.handle}${index}`} tweeter={tweeter}/>;
            })
          }
        </div>
      </RegularLayout>
    )
  }
}

export default IndexComponent;
