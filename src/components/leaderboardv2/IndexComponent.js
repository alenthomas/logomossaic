import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import twitter from '../../../public/assets/logo/twitter.svg';

import { watchLeaderboard } from '../../Services.js'

import RegularLayout from "./../layout/Regular.js";

import './leaderboardv2.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

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
    const { leaderboardv2: componentConfig } = this.props.config;
    var allTweeters = this.getAllTweeters();

    var topThreeTweeters = this.getTopThreeTweeters();
    var remainingTweeters = this.getRemainingTweeters();

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(allTweeters)}
        config={this.props.config}
        className="leaderboardv2"
        title={componentConfig.title}
        shortTitle=''
        hideBgWave={componentConfig.hideBgWave}>
          <div className='container'>
            <div className='top'>
              {topThreeTweeters.map(e => <Post key={e.handle} data={e} />)}
            </div>
            <div className='rest-parent' id='rest-parent'>
              <div id='rest' className='rest'>
                {remainingTweeters.map((e, i) => <Post key={e.handle} data={e} rank={i} />)}
              </div>
            </div>
          </div>
      </RegularLayout>
    )
  }
}

const Post = ({data, rank}) => {
  return (
    <div className='post'>
      <div className='post-img'>
        <img src={data.img[0]} alt='user' />
      </div>
      <div className='post-body'>
        <div className='medal'></div>
        <div className='post-content'>
          <div className='rank'>#{rank+4}</div>
          <div className='author-name'>{data.name}</div>
          <div className='author-handle'>@{data.handle}</div>
        </div>
        <div className='post-footer'>
          <div className='post-count'>Tweets <span>{data.count}</span></div>
          <div className='post-logo'><img src={twitter} alt='twitter-logo' /></div>
        </div>
      </div>
    </div>
  )
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
