import React, { Component } from 'react';

import TweetCard from '../mediacarousel/TweetCard';
import { AnimateScroll } from './AnimateScroll.js';
import {ActionCard} from '../actioncard/ActionCard';
export default class MasonaryStreamV3 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {data};
  }

  renderWrapper = () => {
    let data1 = this.state.data.slice(0, 26).filter((e, i) => i%2 === 0).map((e) => {
      return (<TweetCard data={e} key={e.id} />);
    });
    let data2 = this.state.data.slice(0, 26).filter((e, i) => i%2 !== 0).map((e) => {
      return (<TweetCard data={e} key={e.id} />);
    });
    return (
      <div className='parentt'>
        <AnimateScroll endData={this.endCard()}>
          {data1}
        </AnimateScroll>
        <AnimateScroll endData={this.endCard()}>
          {data2}
        </AnimateScroll>
      </div>
    )
  }

  endCard = () => (<ActionCard />);

  componentDidCatch(e) {
    console.error('MstreamThree ERROR: ', e);
  }

  render() {
    // console.log('MSTREAM: render called');
    return (
      <div className='mstream'>
        { this.renderWrapper() }
      </div>
    )
  }
};