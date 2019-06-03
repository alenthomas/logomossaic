import React, { Component } from 'react';

import TweetCard from '../mediacarousel/TweetCard';
import { AnimateScroll } from './AnimateScroll.js';

const actionCard = {
  "author": {
    "name": "",
    "photo": "",
  },
  "source": {
    "name": "Twitter",
    "logoUrl": "https://twitter.com/favicon.ico"
  },
  "url": "https://twitter.com/ConnextbyMiges1/status/1127234870714032128",
  "text": "Call to action Card",
  "id": "6533000556707873337-action-card",
  "createdAt": "2019-05-11T15:31:50Z",
  "media": [{
    "mediaType": "image/png",
    "url": "",
    "thumbUrl": "",
    "id": "1127234868650422272",
    "sizes": {
      "full": {
        "w": 720,
        "h": 720
      },
      "1:1": {
        "w": 720,
        "h": 720
      }
    }
  }],
  "lang": "en",
  "type": "image",
  "nativeId": "1127234870714032128"
}

export default class MasonaryStreamV3 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {width: 0, height: 0, data, count: [20, 20], repeat: 1, exp: 0, heightOne: 0, heightTwo: 0, heightSingle: 0};
  }
  componentDidMount() {
    // console.log('MSTREAM: Comonent Mounted');
    let width = window.screen.width;
    let height = window.screen.height;
    let exp;
    if (width >= 640) {
      exp = 1;
    } else {
      exp = 1;
    }
    // console.log('MSTREAM: Screen Width calculated');
    // console.log('MSTREAM: Screen width', exp);
    this.setState({width, height, exp});
  }

  onResizeOne = (w, h) => {
    // console.log('MSTREAM: On resize for div one event listener triggered');
    // console.log('MSTREAM: width: ', w, 'height: ', h);
    this.setState({heightOne: h});
  }

  onResizeTwo = (w, h) => {
    // console.log('MSTREAM: On resize for div two event listener triggered');
    // console.log('MSTREAM: width: ', w, 'height: ', h);
    this.setState({heightTwo: h});
  }

  onResize = (w, h) => {
    // console.log('MSTREAM: On resize for single div event listener triggered');
    // console.log('MSTREAM: width: ', w, 'height: ', h);
    this.setState({heightSingle: h});
  }

  renderWrapper = (exp) => {
    // console.log('MSTREAM: Render wrapper called');
    if(exp === 2) {
      console.log('exp: ', 2);
      let data1 = this.state.data.slice(0, 10).filter((e, i) => i%2 === 0).map((e) => {
        return (<TweetCard data={e} key={e.id} />);
      });
      let data2 = this.state.data.slice(0, 10).filter((e, i) => i%2 !== 0).map((e) => {
        return (<TweetCard data={e} key={e.id} />);
      });
      return (
        <div className='parent'>
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
        <div className='parent'>
          <AnimateScroll endData={this.endCard()}>
            {this.state.data.slice(0, 10).map(e => <TweetCard data={e} key={e.id} />)}
          </AnimateScroll>
        </div>
      )
    }
  }

  endCard = () => (<TweetCard data={actionCard} />);

  componentDidCatch(e) {
    console.error('MstreamThree ERROR: ', e);
  }

  render() {
    // console.log('MSTREAM: render called');
    return (
      <div className='mstream'>
        <div className={`mstream-header ${this.state.exp===2? 'towards-left': ''}`}><div className={`logo`} /></div>
        { this.renderWrapper(this.state.exp) }
        <div className='mstream-footer'><div className='footer-logo-left' /><div className='footer-logo-right' /></div>
      </div>
    )
  }
};