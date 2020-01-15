import classNames from 'classnames';
import React, {Component} from 'react';

import TweeterImage from "./TweeterImage.js";
import RankedTweeterDetails from "./RankedTweeterDetails.js";

class RankedTweeterCard extends Component {
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
    let index = this.props.index;

    return (
      <div
        className={classNames("ranked-tweeter-card", { "no-rank": this.props.norank }, "ranked-tweeter-card-transition-appear", {"ranked-tweeter-card-transition-appear-active": this.state.isMounted})}>
        <TweeterImage className="card-element" image={tweeter.img}/>
        <RankedTweeterDetails tweeter={tweeter} index={index}/>
      </div>
    );
  }
}

export default RankedTweeterCard;
