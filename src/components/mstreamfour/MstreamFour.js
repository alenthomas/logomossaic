import React, { Component } from 'react';

import TweetCard from '../mediacarousel/TweetCard';
import { AnimateScroll } from './AnimateScroll.js';
import {ActionCard} from '../actioncard/ActionCard';
export default class MasonaryStreamV4 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {data};
  }

  renderWrapper = () => {
      return (
        <div className='parentt'>
          <AnimateScroll endData={this.endCard()}>
            {this.state.data.slice(0, 13).map(e => <TweetCard data={e} key={e.id} />)}
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
      <div className='mstreamv4'>
        { this.renderWrapper() }
      </div>
    )
  }
};