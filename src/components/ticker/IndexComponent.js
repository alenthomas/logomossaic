import React, { Component } from 'react';

import { pollTextTweets } from '../../Services.js';
import Ticker from './Ticker.js';
import Feed from '../../dataservices/Feed.js';

import './Ticker.css';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    pollTextTweets(this.loadData.bind(this));
  }

  loadData(feed) {
    this.setState({feed: feed})
  }

  isReady() {
    return !this.state.feed.isEmpty()
  }

  render() {
    const { ticker: componentConfig } = this.props.config;
    return (
      <Ticker feed={this.state.feed}/>
    )
  }
}