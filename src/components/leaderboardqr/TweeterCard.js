import classNames from 'classnames';
import React, {Component} from 'react';

import TweetCount from "./TweetCount.js";
import TweeterImage from "./TweeterImage.js";
import ParsedText from '../ParsedText.js';

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
            <ParsedText className="name" data={tweeter.name} />
            <div className='tweets'>
              <span className="label">QR Scans:</span>
              <span className="text">{tweeter.scans}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TweeterCard;
