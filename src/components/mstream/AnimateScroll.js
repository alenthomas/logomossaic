import React, { Component } from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import ReactResizeDetector from 'react-resize-detector';
import './animationscroll.css';
import _ from 'lodash';
IntersectionObserver.prototype.POLL_INTERVAL = 500; // Time in milliseconds.

const SPEED = 25;

export class AnimateScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {showOne: true, showTwo: false, heightOne: 0, heightTwo:0, started: false};
  }

  onResize = (w, h, refId) => {
    // console.log('ANIMATION SCROLL: resize called');
    if(refId === 'one') {
      this.setState({heightOne: h});
      return;
    }
    if(refId === 'two') {
      this.setState({heightTwo: h});
      return;
    }
    return;
  }

  animation = (refId) => {
    // console.log('ANIMATION SCROLL: animation set');
    // return {};
    if(refId === 'one') {
      let time = this.state.heightOne/SPEED;
      return {animation: `scroll-top ${time}s ${!this.state.started ? '2s': '0s'} linear`}
    }
    if(refId === 'two') {
      let time = this.state.heightTwo/SPEED;
      return {animation: `scroll-top ${time}s ${!this.state.started ? '2s': '0s'} linear`}
    }
  }

  manageReff = (refId, ratio, e) => {
    // console.log('ANIMATION SCROLL: event listner called');
    if(refId === 'one') {
        // console.log('one', ratio);
      if(this.state.showOne && ratio > 0.4) {
        // console.log('setstate called for one', false, true, true);
        this.setState({showOne: false, showTwo: true, started: true});
        return;
      }
    }
    if(refId === 'two') {
        // console.log('two', ratio);
      if(this.state.showTwo && ratio > 0.4) {
        // console.log('set state called for two', true, false, true);
        this.setState({showOne: true, showTwo: false, started: true});
      }
    }
  }


  handleChange = (e, intersectionObj, refId) => {
    this.props.children && this.manageReff(refId, e.intersectionRatio, e);
  }

  render() {
    let styleOne = this.animation('one');
    let styleTwo = this.animation('two');
    return (
      <div className='animation-parent'>
        <div
          ref='one'
          className={`one ${this.state.started? 'align-bottom': ''} ${this.state.showOne? '': 'hide'}`}
          style={this.state.showOne ? styleOne: {}}
        >
          <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={(w,h)=>this.onResize(w,h, 'one')} />
          {this.props.children}
          {this.props.endData}
          <Observer onChange={(e, x) => this.handleChange(e, x, 'one')} triggerOnce={false} threshold={[0.85, 1.0]}>
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}><div className='empty'/></div>
          </Observer>
        </div>
        <div
          ref='two'
          className={`two ${this.state.started? 'align-bottom': ''} ${this.state.showTwo? '': 'hide'}`}
          style={this.state.showTwo ? styleTwo: {}}
        >
          <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={(w,h)=>this.onResize(w,h, 'two')} />
          {this.props.children}
          {this.props.endData}
          <Observer onChange={(e, x) => this.handleChange(e, x, 'two')} triggerOnce={false} threshold={[0.5, 1.0]}>
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}><div className='empty'/></div>
          </Observer>
        </div>
      </div>
    )
  }

}