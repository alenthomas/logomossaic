import React, { Component } from 'react';

import { pollTextTweets } from '../../Services.js';
import Ticker from './Ticker.js';
import Feed from '../../dataservices/Feed.js';

import './Ticker.css';
import { handleError } from '../../Helper.js';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    pollTextTweets(this.loadData.bind(this), handleError);
  }

  loadData(feed) {
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