import React, { Component } from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import ReactResizeDetector from 'react-resize-detector';
import './animationscroll.css';
import _ from 'lodash';
IntersectionObserver.prototype.POLL_INTERVAL = 500; // Time in milliseconds.

const SPEED = 100.91;

export class AnimateScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {showOne: true, showTwo: false, heightOne: 0, heightTwo:0, oneInView: false, twoInView: false};
  }

  onResize = (w, h, refId) => {
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
    // return {};
    if(refId === 'one') {
      let time = this.state.heightOne/SPEED;
      return {animation: `scroll-top ${time}s linear`}
    }
    if(refId === 'two') {
      let time = this.state.heightTwo/SPEED;
      return {animation: `scroll-top ${time}s linear`}
    }
  }

  manageReff = (refId, ratio, e) => {
    if(refId === 'one') {
      // if(this.state.showOne && ratio > 0.2 && ratio < 0.8) {
        // this.setState({showOne: true, showTwo: true, oneInView: true});
        // return;
      // }
      if(this.state.showOne && ratio > 0.99) {
        this.setState({showOne: false, showTwo: true, oneInView: false, twoInView: true});
        return;
      }
    }
    if(refId === 'two') {
      // if(this.state.showTwo && ratio > 0.2 && ratio < 0.8) {
        // this.setState({showOne: true, showTwo: true, twoInView: true, oneInView: true});
        // return;
      // }
      if(this.state.showTwo && ratio > 0.99) {
        this.setState({showOne: true, showTwo: false});
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
          id='one'
          ref='one'
          className={`one ${this.state.showOne? '': 'hide'}`}
          style={this.state.showOne ? styleOne: {}}
        >
          <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={(w,h)=>this.onResize(w,h, 'one')} />
          {this.props.children}
          <Observer onChange={(e, x) => this.handleChange(e, x, 'one')} triggerOnce={false} threshold={[0.1, 1.0]}>
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
          </Observer>
        </div>
        <div
          id='two'
          ref='two'
          className={`two ${this.state.showTwo? '': 'hide'}`}
          style={this.state.showTwo ? styleTwo: {}}
        >
          <ReactResizeDetector handleWidth={false} handleHeight={true} onResize={(w,h)=>this.onResize(w,h, 'two')} />
          {this.props.children}
          <Observer onChange={(e, x) => this.handleChange(e, x, 'two')} triggerOnce={false} threshold={[0.1, 1.0]}>
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
          </Observer>
        </div>

      </div>
    )
  }

}