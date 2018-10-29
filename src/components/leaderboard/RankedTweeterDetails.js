import React, {Component} from 'react';

import TweetCount from "./TweetCount.js";

class RankedTweeterDetails extends Component {
  render() {
    let tweeter = this.props.tweeter;
    let index = this.props.index;

    return (
      <div
        className="card-element tweeter-details">
        <div className={`medal medal-${index}`}/>
        <div className="name">{tweeter.name}</div>
        <div className="twitter-handle">{"@" + tweeter.handle}</div>
        <TweetCount key={tweeter.count} tweetCount={tweeter.count}/>
      </div>
    );
  }
}

export default RankedTweeterDetails;
