import React, { Component } from 'react';

import Tweet from './Tweet.js';

export default class Marquee extends Component {
  render() {
    const { data } = this.props;
    const animationDuration = data.length * 25;

    return <div className="marquee-container">
      <div className="left">
        <div className='marquee' style={{'animation': `marquee ${animationDuration}s linear infinite`}}>
          {data.map((datum) => <Tweet key={datum.id} tweet={datum} />)}
        </div>
      </div>

      <div className='right'>
        <img src="/assets/marquee/logo.png" alt="Fankave" />
      </div>
    </div>
  }
}
