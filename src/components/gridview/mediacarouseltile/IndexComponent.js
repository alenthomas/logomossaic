import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import {watchFeatured} from './../../../Services.js';
import TweetCard from './../../mediacarousel/TweetCard.js';

import './MediaCarouselTile.css';
import { handleError, getQueryString } from '../../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

const HIDE_INTERVAL = 9000;

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetTuples: [],
      currentTweet: 0,
      incrementer: 0
    };
  }

  UNSAFE_componentWillMount() {
    let {mediacarouseltile: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    this.props.markReady({'MediaCarouselTile': false});
  }

  componentDidMount() {
    this.hideTimer = setInterval(this.loadNext, HIDE_INTERVAL);
    // window.loadNext = this.loadNext;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {mediacarouseltile: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
    clearInterval(this.hideTimer);
  }

  setIncrementer() {
    let {currentTweet, tweetTuples} = this.state
    if (currentTweet === tweetTuples.length - 1) {
      this.setState({incrementer: -1})
    } else if (currentTweet === 0) {
      this.setState({incrementer: 1})
    }
  }

  loadNext = () => {
    this.setIncrementer()
    let currentTweet = this.state.currentTweet + this.state.incrementer;
    this.setState({currentTweet: currentTweet});
  }

  loadData = (json) => {
    let tweetTuples = lodash.chunk(lodash.take(json, 50), 2)
    this.setState({tweetTuples: tweetTuples});
    this.props.markReady({'MediaCarouselTile': true});
  }

  getTweetCards = (datum) => {
    let cards = [<div key={datum[0].id} className="card-container top">
      <TweetCard data={datum[0]} />
    </div>]
    if (datum[1]) {
      cards.push(
        <div key={datum[1].id} className="card-container bottom">
          <TweetCard data={datum[1]} />
        </div>
      )
    }
    return cards;
  }

  render() {
    let {tweetTuples} = this.state;

    if(!tweetTuples) {
      return
    }

    return (
      <div className='tile mediacarouseltile'>
        <div className="body">
        {
          lodash.map(tweetTuples,
              (datum, i) => {
                let hide = (i === this.state.currentTweet) ? 'wrapper' : 'hide wrapper';
                let keyStr = `${datum[0].id}-${datum[1] ? datum[1].id : ''}`
                return <div key={keyStr} className={hide} style={{'zIndex' : 100+i}}>
                  {this.getTweetCards(datum)}
                </div>
            }
          )
        }
        </div>
      </div>
    )
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    mediacarouseltile: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  markReady: PropTypes.func.isRequired,
}

export default IndexComponent;
