import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class TweetCount extends Component {
  render() {
    let tweetCount = this.props.tweetCount;

    return (
      <div className="tweets">
        <span className="count">
          <span className="label">Tweets</span>
          <CSSTransitionGroup
            transitionName="tweet-count-transition"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnterTimeout={1}
            transitionLeaveTimeout={1}>
            <span className="text">{tweetCount}</span>
          </CSSTransitionGroup>
        </span>
        <img className="twitter-bird" src="/assets/logo/twitter.svg" alt="Twitter bird"/>
      </div>
    );
  }
}

export default TweetCount;
