import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getLeaders } from '../../Services.js'

import RankedTweeterCard from "./RankedTweeterCard.js";
import RegularLayout from "./../layout/Regular.js";

import './Leaderboard.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager'
import QrLeaders from '../../models/Qr.js';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    let objParam = getQueryString(this.props.location.search);
    this.DISPLAY_VERT_SIZE = objParam.vert;
    this.DISPLAY_HOR_SIZE = objParam.hor;
    this.state = {
      allTweeters: []
    };
  }

  loadData = (data) => {
    let qrLeaders = data.map((datum, i) => new QrLeaders(datum)).sort((a, b) => b.scans-a.scans).slice(0, 11)
    this.setState({allTweeters: qrLeaders});
  }

  componentWillMount() {
    // let { leaderboardqr: { refreshrate } } = this.props.config;
    // let params = getQueryString(this.props.location.search);
    getLeaders(this.loadData, handleError, 25);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      // let { leaderboard: { refreshrate } } = this.props.config;
      // let params = getQueryString(this.props.location.search);
      // watchLeaderboard(this.loadData, handleError, params.ctag, params.filter, refreshrate);
      getLeaders(this.loadData, handleError, 25);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  getAllTweeters() {
    return lodash(this.state.allTweeters).sortBy(["scans", "name"]).reverse().value();
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
    const { leaderboardqr: componentConfig } = this.props.config;
    var allTweeters = this.getAllTweeters();

    var topThreeTweeters = this.getTopThreeTweeters();
    var remainingTweeters = this.getRemainingTweeters();

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(allTweeters)}
        config={this.props.config}
        className="leaderboard-qr"
        title={componentConfig.title}
        shortTitle={"Leaderboard"}
        hideBgWave={componentConfig.hideBgWave}
        vert={this.DISPLAY_VERT_SIZE}
        hor={this.DISPLAY_HOR_SIZE}
      >
        <div className="dashboard-content leaderboard-qr-cards">
          {
            lodash.map(topThreeTweeters, (tweeter, index) => {
              return <RankedTweeterCard key={`${tweeter.name}${index}`} index={index} tweeter={tweeter}/>;
            })
          }
          {
            lodash.map(remainingTweeters, (tweeter, index) => {
              return <RankedTweeterCard norank={true} key={`${tweeter.handle}${index}`} tweeter={tweeter}/>;
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
