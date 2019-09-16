import React, { Component } from 'react';
import lodash from 'lodash';

import { formatNumber } from './helpers.js';

export default class TweetCardBottomSection extends Component {

  renderLikes = (likes) => {
    return likes ? (
      <div className='likes'>
        <span className='icon'><i className='icon-heart-empty' /></span>
        <span>{formatNumber(likes)}</span>
      </div>
    ): null;
  }

  renderShares = (shares) => {
    return shares ? (
      <div className="shares">
        <span className='icon'><i className='icon-retweet' /></span>
        <span>{formatNumber(shares)}</span>
      </div>
    ) : null;
  }

  renderLogo = (logoName) => {
    return (<i className={`icon-${logoName}`} />)
  }

  render() {
    let embed = this.props.embed;
    let shares = lodash.get(embed, 'metrics.shares');
    let likes = lodash.get(embed, 'metrics.likes');
    let { name } = this.props.source;
    if(name === 'Instagram') {
      return (
      <div className='tweet-card-bottom'>
        <div className="metrics">
        {this.renderLikes(likes)}
        </div>
        <div className="twitter-logo">
          {this.renderLogo('instagram')}
        </div>
      </div>
      )
    }

    if(name === 'Twitter') {
      return (
        <div className="tweet-card-bottom">
          <div className="metrics">
          {this.renderLikes(likes)}
          {this.renderShares(shares)}
          </div>
          <div className="twitter-logo">
            {this.renderLogo('twitter')}
          </div>
        </div>
      )
    }

    return null;
  }
}
