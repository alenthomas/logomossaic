import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchLeaderboard } from '../../Services.js'

import RankedTweeterCard from "./RankedTweeterCard.js";
import TweeterCard from "./TweeterCard.js";
import RegularLayout from "./../layout/Regular.js";

import './Leaderboard.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager'

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    let objParam = getQueryString(this.props.location.search);
    this.DISPLAY_VERT_SIZE = objParam.vert;
    this.state = {
      allTweeters: []
    };
  }

  loadData = (data) => {
    this.setState({allTweeters: data});
  }

  componentWillMount() {
    let { leaderboard: { refreshrate } } = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchLeaderboard(this.loadData, handleError, params.ctag, params.filter, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let { leaderboard: { refreshrate } } = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchLeaderboard(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
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
        hideBgWave={componentConfig.hideBgWave}
        vert={this.DISPLAY_VERT_SIZE}
      >
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

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    leaderboard: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default IndexComponent;
