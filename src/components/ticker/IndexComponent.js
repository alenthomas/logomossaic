import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { pollTextTweets } from '../../Services.js';
import Ticker from './Ticker.js';
import Feed from '../../dataservices/Feed.js';

import './Ticker.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    let {ticker: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    pollTextTweets(this.loadData, handleError, params.ctag, params.filter, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {ticker: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      pollTextTweets(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (feed) => {
    this.setState({feed: feed})
  }

  isReady() {
    return !this.state.feed.isEmpty()
  }

  render() {
    return (
      <Ticker feed={this.state.feed}/>
    )
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    ticker: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}