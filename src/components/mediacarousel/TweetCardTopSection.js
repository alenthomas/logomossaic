import React, { Component } from 'react';
import twitterTimeAgo from 'twitter-timeago';

import TwitterAvatar from './TwitterAvatar.js';
import ParsedText from '../ParsedText.js';

export default class TweetCardTopSection extends Component {
  render() {
    let embed = this.props.embed;

    return <div className="tweet-card-top">
      <TwitterAvatar image={embed.author.photo} />

      <div className="profile">
        <ParsedText className="name" data={embed.author.name} />
        <div className="handle">@{embed.author.alias}</div>
      </div>

      <div className="timestamp">
        <img className="clock" src="/assets/icons/clock.svg" alt="Clock"/>
        <span>{twitterTimeAgo(new Date(Date.parse(embed.createdAt)))}</span>
      </div>
    </div>;
  }
};
