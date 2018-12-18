import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';
import ParsedText from '../ParsedText.js';

import { getThumbNailUrl } from './../mediacarousel/helpers.js';

export default class Tweet extends Component {

  handleError = (e) => {
    e.target.error = null;
    e.target.style.display = 'none';
  }

  render() {
    const embed = this.props.tweet;
    const imgUrl = getThumbNailUrl(embed);

    return <div className='tweet'>
      <div className='tweet-content'>
        <TwitterAvatar image={embed.author.photo} />
        <ParsedText className='handle' data={`@${embed.author.alias}`} />
        <div className='image'><img src={imgUrl} alt='img' onError={(e) => this.handleError(e)} /></div>
        <ParsedText className='text' data={embed.text} />
        <div className='timeago'>{twitterTimeAgo(new Date(Date.parse(embed.createdAt)))} ago</div>
        <img className="twitter-bird" src="/assets/logo/twitter.svg" alt="Twitter bird"/>
      </div>
    </div>
  }
}
