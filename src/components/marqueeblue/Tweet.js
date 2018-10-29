import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';

import { removeLinks } from './../mediacarousel/helpers.js';

export default class Tweet extends Component {
  render() {
    const { tweet } = this.props;
    const { embed } = tweet.content.sections[0];

    return <div className='tweet'>
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
