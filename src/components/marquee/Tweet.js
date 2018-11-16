import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';

import { removeLinks, getThumbNailUrl } from './../mediacarousel/helpers.js';

export default class Tweet extends Component {

  handleError = (e) => {
    e.target.error = null;
    e.target.style.display = 'none';
  }

  render() {
    const { tweet } = this.props;
    const { embed } = tweet.content.sections[0];
    const imgUrl = getThumbNailUrl(embed);

    return <div className='tweet'>
      <div className='tweet-content'>
        <TwitterAvatar image={embed.author.photo} />
        <div className='handle'>@{embed.author.alias}</div>
        <div className='image'><img src={imgUrl} alt='img' onError={(e) => this.handleError(e)} /></div>
        <div className='text'>{removeLinks(embed.text)}</div>
        <div className='timeago'>{twitterTimeAgo(new Date(Date.parse(embed.createdAt)))} ago</div>
        <img className="twitter-bird" src="/assets/logo/twitter.svg" alt="Twitter bird"/>
      </div>
    </div>
  }
}
