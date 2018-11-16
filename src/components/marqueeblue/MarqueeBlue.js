import React, { Component } from 'react';

import Tweet from './Tweet.js';

export default class Marquee extends Component {
  render() {
    const { data } = this.props;
    const animationDuration = data.length * 20;

    return <div className="marquee-blue-container">
      <div className="left">
        <div className='marquee' style={{'animation': `marquee ${animationDuration}s linear infinite`}}>
          {data.map((datum) => <Tweet key={datum.id} tweet={datum} />)}
        </div>
      </div>
    </div>
  }
}
