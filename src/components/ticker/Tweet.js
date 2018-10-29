import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';

import { removeLinks } from './../mediacarousel/helpers.js';
import { SCROLL_SPEED } from './Ticker.js';

export default class Tweet extends Component {
  
  getWidth() {
    let tweetDom = this.refs.tweet;
    return tweetDom && tweetDom.getBoundingClientRect().width;
  }

  render() {
    const { tweet, scroll } = this.props;
    const { embed } = tweet.content.sections[0];
    let width = this.getWidth();
    let style = {
      left: scroll ? `-${width}px` : "100%",
      transitionDuration: scroll ? `${(width + window.innerWidth) / SCROLL_SPEED}s` : '0s'
    };

    return <div ref='tweet' className='tweet' style={style}>
      <div className='tweet-content'>
        <TwitterAvatar image={embed.author.photo} />
        <div className='handle'>@{embed.author.alias}</div>
        <div className='text'>{removeLinks(embed.text)}</div>
        <div className='timeago'>{twitterTimeAgo(new Date(Date.parse(embed.createdAt)))} ago</div>
        <img className="twitter-bird" src="/assets/logo/twitter.svg" alt="Twitter bird"/>
      </div>
    </div>
  }
}
