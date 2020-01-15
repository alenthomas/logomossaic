import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class TweetCount extends Component {
  render() {
    let tweetCount = this.props.tweetCount;

    return (
      <div className="tweets">
        <span className="count">
          <span className="label">QR Scans:</span>
          <CSSTransitionGroup
            transitionName="tweet-count-transition"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnterTimeout={1}
            transitionLeaveTimeout={1}>
            <span className="text">{tweetCount}</span>
          </CSSTransitionGroup>
        </span>
        <i className='icon-twitter' />
      </div>
    );
  }
}

export default TweetCount;
