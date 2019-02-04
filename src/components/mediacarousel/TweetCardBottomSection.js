import React, { Component } from 'react';
import lodash from 'lodash';

import { formatNumber } from './helpers.js';

export default class TweetCardBottomSection extends Component {

  renderLikes = (likes) => {
    return likes ? (
      <div className='likes'>
        <div className='icon like' />
        <span>{formatNumber(likes)}</span>
      </div>
    ): null;
  }

  renderShares = (shares) => {
    return shares ? (
      <div className="shares">
        <div className="icon retweet"/>
        <span>{formatNumber(shares)}</span>
      </div>
    ) : null;
  }

  renderLogo = (logoSvg, logoName) => {
    return (<img className="twitter-bird" src={logoSvg} alt={logoName}/>)
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
        {this.renderLikes(shares)}
        </div>
        <div className="twitter-logo">
          {this.renderLogo('/asset/logo/instagram.svg', 'instagram')}
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
            {this.renderLogo('/asset/logo/twitter.svg', 'twitter')}
          </div>
        </div>
      )
    }

    return ''
  }
}
