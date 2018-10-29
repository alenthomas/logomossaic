import React, { Component } from 'react';
import classnames from 'classnames';

import { sanitizeText } from './helpers.js';

export default class TweetCardMiddleSection extends Component {

  render() {
    const { embed, embed: { media }, className } = this.props;

    return <div className={classnames("tweet-card-middle", className)}>
      { (media && media[0].mediaType.match(/image/)) ?
          <div className="image" style={{backgroundImage: `url("${media[0].url}")`}}></div>
          : null
      }

      <div className="text-content" dangerouslySetInnerHTML={{ __html: sanitizeText(embed.text) }} />
    </div>;
  }
};
