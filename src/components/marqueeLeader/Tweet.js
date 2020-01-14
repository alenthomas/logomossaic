import React, { Component } from 'react';

import TwitterAvatar from './../mediacarousel/TwitterAvatar.js';
import defaultImage from '../../../public/assets/defaultCircle.png';
import ParsedText from '../ParsedText.js';

export default class Tweet extends Component {

  handleError = (e) => {
    e.target.error = null;
    e.target.style.display = 'none';
  }
  returnMedal = (i) => {
    if (i <= 2) {
      return i;
    }
    return '';
  }

  render() {
    const embed = this.props.tweet;
    return (
      <div className='tweet'>
        <div className='tweet-content'>
          <div className="avatar">
            <object className="image-obj" data={defaultImage} type="image/png">
              <img src={defaultImage} alt="Tweeter"/>
            </object>
          </div>
          <div className={`medal medal-${this.returnMedal(this.props.rank)}`}></div>
          <div>
            <ParsedText className='handle' data={`${embed.name}`} />
            <div className='timeago'>QR Scans:<span>{` ${embed.scans}`}</span></div>
          </div>
      </div>
      </div>
    )
  }
}
