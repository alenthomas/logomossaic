import React, { Component } from 'react';

import { pollTextTweets } from '../../Services.js';
import Ticker from './Ticker.js';
import Feed from '../../dataservices/Feed.js';

import './Ticker.css';
import { handleError, getQs } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    let params = getQs(this.props.location.search);
    pollTextTweets(params, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQs(this.props.location.search);
      pollTextTweets(params, this.loadData, handleError);
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