import React, { Component } from 'react';
import CBuffer from 'CBuffer';
import lodash from 'lodash';
import classNames from 'classnames';

import TweetCard from './../mediacarousel/TweetCard.js';

const bufferSize = 10;
const sliderInterval = 8000;

export default class TweetColumn extends Component {
  constructor(props) {
    super(props);

    this.CBuffer = CBuffer(bufferSize);
    let dataIds = [];

    lodash.map(this.props.data, (datum) => {
      this.CBuffer.push(datum);

      dataIds = [datum.id].concat(dataIds);
    });

    this.state = {
      data: this.CBuffer.toArray(),
      dataIds: dataIds,
      tweetHeights: {}
    };
  }

  slideTransition() {
    const { columnName } = this.props;
    const { data, tweetHeights } = this.state;
    const height = tweetHeights[data[0].id] || 0;
    let roller = document.getElementsByClassName(columnName)[0];

    if(roller && !roller.classList.contains('slide')) {
      roller.style.transform = `translateY(${-height}px)`;
      setTimeout(() => {
        roller.classList.add('slide')
        roller.style.transform = "";
      }, 1);
    }
  }

  transitionEnd(columnName) {
    return () => {
      let roller = document.getElementsByClassName(columnName)[0];
      roller.classList.remove('slide');
    }
  }

  rotateData() {
    this.CBuffer.rotateRight();
    this.setState({data: this.CBuffer.toArray()}, this.slideTransition.bind(this));
  }

  setHeight(id, height) {
    let { state } = this;
    state.tweetHeights[id] = height;

    this.setState(state);
  }

  UNSAFE_componentWillMount() {
    this.interval = setInterval(this.rotateData.bind(this), sliderInterval + Math.random() * 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let { dataIds } = this.state;

    lodash.map(nextProps.data, (datum) =>{
      if(!lodash.includes(dataIds, datum.id)) {
        dataIds = [datum.id].concat(dataIds);

        this.CBuffer.push(datum);
      }
    });

    this.setState({dataIds: dataIds});
  }

  render() {
    const { data } = this.state;
    const { columnName } = this.props;
    const className = classNames(columnName, 'tweet-column');

    return <div className='tweet-column-wrapper' onTransitionEnd={this.transitionEnd(columnName).bind(this)}>
      <div className={className}>
        {
          lodash.map(data, (datum) => <TweetCard key={datum.id} data={datum} onComponentDidMount={this.setHeight.bind(this)}/>)
        }
      </div>
    </div>
  }
}
