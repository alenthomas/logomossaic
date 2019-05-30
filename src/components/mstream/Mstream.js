import React, { Component } from 'react';
// import _ from 'lodash';

import TweetCard from './../mediacarousel/TweetCard';
import ReactResizeDetector from 'react-resize-detector';
// import 'intersection-observer'; // optional polyfill
// import Observer from '@researchgate/react-intersection-observer';
// const uuidv1 = require('uuid/v1');

export default class MasonaryStreamV2 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {width: 0, height: 0, data, count: [20, 20], repeat: 1, exp: 0, heightOne: 0, heightTwo: 0, heightSingle: 0};
  }
  componentDidMount() {
    let width = window.screen.width// * window.devicePixelRatio;
    let height = window.screen.height// * window.devicePixelRatio;
    let exp;
    if (width >= 640) {
      exp = 2;
    } else {
      exp = 1;
    }
    this.setState({width, height, exp});
  }

  // intersected = (e) => {

  //   if(e.isIntersecting) {
  //     let v = parseInt(e.target.attributes['data-card-id'].value, 10);
  //     this.getMoreContent(v);
  //   }
  // }

  // getMoreContent = (v) => {
  //   this.setState((prevState) => {
  //     let count = [...prevState.count];
  //       count[v] += 10
  //     return ({count})
  //   }, () => this.addNewData(v));
  // }

  // addNewData = (v) => {
  //   let min;
  //   if(this.state.exp === 2) {
  //     min = Math.max.apply(Math, this.state.count);
  //     min *= 2;
  //   } else {
  //     min = this.state.count[v];
  //   }
  //   if(this.state.data.length - min <= 20) {
  //     let data = this.props.data;
  //     let propDataLength = this.props.data.length;
  //     if(data[data.length-1].id !== this.state.data.slice(0, propDataLength)[propDataLength-1].id) {
  //       this.setState((prevState) => {
  //         let newData = _.unionBy([...prevState.data, ...data], 'id');
  //         return ({data: newData})
  //       })
  //       return;
  //     } else {
  //       this.setState((prevState) => {
  //         let uuid = uuidv1();
  //         let repeatData = prevState.data.slice(0, 100).map(e => ({...e, id: e.id+uuid}));
  //         return ({data: [...prevState.data, ...repeatData]});
  //       })
  //       return;
  //     }
  //   }
  // }

  onResizeOne = (w, h) => {
    this.setState({heightOne: h});
  }

  onResizeTwo = (w, h) => {
    this.setState({heightTwo: h});
  }

  onResize = (w, h) => {
    this.setState({heightSingle: h});
  }
  // handleChange = (e, obj, custom) => {
  //   console.log('here', e, custom);
  //   if(e.isIntersecting && e.boundingClientRect.top > 100) {
  //     if(custom === 'one') {
  //       let newData = this.state.data.map((e, i) => {
  //         if(i%2 === 0) {
  //           return {...e, id: `${e.id}${this.state.emptyDivOne}`}
  //         }
  //         return e;
  //       })
  //       this.setState(prevState => ({emptyDivOne: !prevState.emptyDivOne, data: newData}));
  //     }
  //     if(custom === 'two') {
  //       this.setState(prevState => ({emptyDivOne: !prevState.emptyDivTwo}));
  //     }
  //     if(custom === 'single') {
  //       this.setState(prevState => ({emptyDiv: !prevState.emptyDiv}));
  //     }
  //   }
  // }

  renderWrapper = (exp) => {
    // const options = {
    //   onChange: this.intersected,
    //   root: null,
    //   threshold: 1.0,
    //   triggerOnce: true
    // };
    if(exp === 2) {
      let data1 = this.state.data.filter((e, i) => i%2 === 0).map((e, i) => {
        return (<TweetCard data={e} key={e.id} />);
      });
      let data2 = this.state.data.filter((e, i) => i%2 !== 0).map((e, i) => {
        return (<TweetCard data={e} key={e.id} />);
      });
      return (
        <div className='parent'>
          <Wrapper id={0} cardCount={data1.length} height={this.state.heightOne}>
            <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={this.onResizeOne} />
            {data1}
          </Wrapper>
          <Wrapper id={1} cardCount={data2.length} height={this.state.heightTwo}>
            <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={this.onResizeTwo} />
            {data2}
          </Wrapper>
        </div>
      )
    } else if(exp === 1){
      return (
        <Wrapper cardCount={this.state.data.length} height={this.state.heightSingle}>
          <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={this.onResize} />
          {this.state.data.map((e, i) => {
            return (<TweetCard data={e} key={e.id} />)
          })}
        </Wrapper>
      )
    }
  }

  render() {
    return (
      <div className='mstream'>
        <div className={`mstream-header ${this.state.exp===2? 'towards-left': ''}`}><div className={`logo`} /></div>
        { this.renderWrapper(this.state.exp) }
        <div className='mstream-footer'><div className='footer-logo-left' /><div className='footer-logo-right' /></div>
      </div>
    )
  }
};

let SPEED = 7;
class Wrapper extends React.Component {
  render() {
    let time = this.props.height/SPEED;
    return (
      <div className='contain'>
        <div className='mstream-wrapper' style={{animation: `scroll ${time}s linear 5s infinite`}}>
        {this.props.children}
      </div>
      </div>
    )
  }
}

