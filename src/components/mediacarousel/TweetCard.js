import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import TweetCardTopSection from './TweetCardTopSection.js'
import TweetCardMiddleSection from './TweetCardMiddleSection.js'
import TweetCardBottomSection from './TweetCardBottomSection.js'

import { findCardType } from './helpers.js';

class TweetCard extends Component {
  componentDidMount() {
    const { onComponentDidMount, data } = this.props;
    if(onComponentDidMount) {
      const height = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      onComponentDidMount(data.id, height);
    }
  }

  render() {
    const { data, className } = this.props;
    let cardType = findCardType(data);

    return <div className={classNames("tweet-card", className)}
                style={this.props.style || {}}>
      <TweetCardTopSection embed={data} />
      <TweetCardMiddleSection embed={data}
        dataId={data.id}
        className={cardType} />
      <TweetCardBottomSection embed={data} source={data.source} />
    </div>;
  }
}

export default TweetCard;
