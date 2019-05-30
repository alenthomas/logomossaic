import React, { Component } from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';
import ReactResizeDetector from 'react-resize-detector';
import './animationscroll.css';

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
      return {animation: `scroll ${time}s linear`}
    }
    if(refId === 'two') {
      let time = this.state.heightTwo/SPEED;
      return {animation: `scroll ${time}s linear`}
    }
  }

  manageRef = (refId, ratio) => {
    if(refId === 'one') {
      if(this.state.showOne) {
        if(ratio > 0 && ratio < 0.2 && this.state.oneInView) {
          // div entering
          this.setState({showTwo: true, showOne: false, oneInView: false});
          return;
        }
        // if(ratio > 0 && ratio < 0.2 && this.state.oneInView) {
        //   // div exiting
        //   this.setState({showTwo: true, showOne: true, oneInView: false});
        //   return;
        // }
        if(ratio > 0.8 && ratio < 1.1) {
          this.setState({showTwo: true, showOne: true, oneInView: true});
          return;
        }
      }
    }
    if(refId === 'two') {
      if(this.state.showTwo) {
        // if(ratio > 0 && ratio < 0.2 && !this.state.twoInView) {
        //   // div entering
        //   this.setState({showTwo: true, showOne: false, twoInView: true});
        //   return;
        // }
        if(ratio > 0 && ratio < 0.2 && this.state.twoInView) {
          // div exiting
          this.setState({showTwo: false, showOne: true, twoInView: false});
          return;
        }
        if(ratio > 0.8 && ratio < 1.1 && !this.state.showOne) {
          this.setState({showTwo: true, showOne: true, twoInView: true});
          return;
        }
      }
    }
  }

  handleChange = (e, intersectionObj, refId) => {
    this.props.children && this.manageRef(refId, e.intersectionRatio)
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
          <Observer onChange={(e, x) => this.handleChange(e, x, 'one')} triggerOnce={true} threshold={[0.1, 1.0]}>
            <div>{this.props.endData}</div>
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
          <Observer onChange={(e, x) => this.handleChange(e, x, 'two')} triggerOnce={true} threshold={[0.1, 1.0]}>
            <div>{this.props.endData}</div>
          </Observer>
        </div>

      </div>
    )
  }

}