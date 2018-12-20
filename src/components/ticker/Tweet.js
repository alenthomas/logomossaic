import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';

import { SCROLL_SPEED } from './Ticker.js';
import ParsedText from '../ParsedText.js';

export default class Tweet extends Component {

  getWidth() {
    let tweetDom = this.refs.tweet;
    return tweetDom && tweetDom.getBoundingClientRect().width;
  }

  render() {
    const { tweet, scroll } = this.props;
    let width = this.getWidth();
    let style = {
      left: scroll ? `-${width}px` : "100%",
      transitionDuration: scroll ? `${(width + window.innerWidth) / SCROLL_SPEED}s` : '0s'
    };

    return <div ref='tweet' className='tweet' style={style}>
      <div className='tweet-content'>
        <TwitterAvatar image={tweet.author.photo} />
        <div className='handle'>@{tweet.author.alias}</div>
        <ParsedText className='text' data={tweet.text} />
        <div className='timeago'>{twitterTimeAgo(new Date(Date.parse(tweet.createdAt)))} ago</div>
        <img className="twitter-bird" src="/assets/logo/twitter.svg" alt="Twitter bird"/>
      </div>
    </div>
  }
}
