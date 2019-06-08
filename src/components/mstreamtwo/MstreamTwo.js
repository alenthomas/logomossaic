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
    this.state = {width: 0, height: 0, data, exp: 0};
  }
  componentDidMount() {
    // console.log('MSTREAM: Comonent Mounted');
    let width = window.screen.width;
    let height = window.screen.height;
    let exp=2;
    if (width >= 640) {
      exp = 2;
    } else {
      exp = 1;
    }
    // console.log('MSTREAM: Screen Width calculated');
    // console.log('MSTREAM: Screen width', exp);
    this.setState({width, height, exp});
  }

  renderWrapper = (exp) => {
    // console.log('MSTREAM: Render wrapper called');
    if(exp === 2) {
      // console.log('exp: ', 2);
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
    } else if(exp === 1){
      // console.log('MSTREAM: exp: ', 1);
      return (
        <div className='parentt'>
          <AnimateScroll endData={this.endCard()}>
            {this.state.data.slice(0, 13).map(e => <TweetCard data={e} key={e.id} />)}
          </AnimateScroll>
        </div>
      )
    }
  }

  endCard = () => (<ActionCard />);

  componentDidCatch(e) {
    console.error('MstreamThree ERROR: ', e);
  }

  render() {
    // console.log('MSTREAM: render called');
    return (
      <div className='mstream'>
        { this.renderWrapper(this.state.exp) }
      </div>
    )
  }
};