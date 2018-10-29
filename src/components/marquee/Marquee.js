import React, { Component } from 'react';

import Tweet from './Tweet.js';

import { findCardType } from './../mediacarousel/helpers.js';

export default class Marquee extends Component {
  render() {
    const { data } = this.props;
    const textData = data.filter((datum) => {
      return findCardType(datum) === 'text';
    })
    const animationDuration = textData.length * 15;

    return <div className="marquee-container">
      <div className="left">
        <div className='marquee' style={{'animation': `marquee ${animationDuration}s linear infinite`}}>
          {textData.map((datum) => <Tweet key={datum.id} tweet={datum} />)}
        </div>
      </div>

      <div className='right'>
        <img src="/assets/marquee/logo.png" alt="Fankave" />
      </div>
    </div>
  }
}
