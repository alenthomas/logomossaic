import React, { Component } from 'react';
import lodash from 'lodash';

import { formatNumber } from './helpers.js';

export default class TweetCardBottomSection extends Component {
  render() {
    let embed = this.props.embed;
    let shares = lodash.get(embed, 'metrics.shares');
    let likes = lodash.get(embed, 'metrics.likes');
    let { type } = this.props.source;
    let sourceTypeIcon = `/assets/logo/${type}.svg`

    return <div className="tweet-card-bottom">
      <div className="metrics">
        { likes ?
          <div className="likes">
            <div className="icon like"/>
            <span>{formatNumber(likes)}</span>
          </div>
          : false
        }

        { shares ?
          <div className="shares">
            <div className="icon retweet"/>
            <span>{formatNumber(shares)}</span>
          </div>
          : false
        }
      </div>

      <div className="twitter-logo">
        <img className="twitter-bird" src={sourceTypeIcon} alt={type}/>
      </div>
    </div>
  }
}
