import classNames from 'classnames';
import React, {Component} from 'react';

import TweetCount from "./TweetCount.js";
import TweeterImage from "./TweeterImage.js";

class TweeterCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => this.setState({isMounted: true}));
  }

  render() {
    let tweeter = this.props.tweeter;

    return (
      <div className={classNames("tweeter-card", "tweeter-card-transition-appear", {"tweeter-card-transition-appear-active": this.state.isMounted})}>
        <div className="tweeter-details">
          <TweeterImage image={tweeter.img}/>
          <div className="details">
            <div className="name">{tweeter.name}</div>
            <div className="twitter-handle">{"@" + tweeter.handle}</div>
          </div>
        </div>
        <TweetCount key={tweeter.count} tweetCount={tweeter.count}/>
      </div>
    );
  }
}

export default TweeterCard;
