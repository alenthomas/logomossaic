import React, {Component} from 'react';

import ParsedText from '../ParsedText.js';

class RankedTweeterDetails extends Component {
  render() {
    let tweeter = this.props.tweeter;
    let index = this.props.index;

    return (
      <div
        className="card-element tweeter-details">
        <div className={`medal medal-${index}`}/>
        <ParsedText className="name" data={tweeter.name} />
        <div className='tweets'>
          <span className="label">QR Scans:</span>
          <span className="text">{` ${tweeter.scans}`}</span>
        </div>
      </div>
    );
  }
}

export default RankedTweeterDetails;
