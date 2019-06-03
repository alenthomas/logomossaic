import React, { Component } from 'react';
import 'intersection-observer';
// import ReactResizeDetector from 'react-resize-detector';
import './animationscroll.css';
import _ from 'lodash';

const SPEED = 15;

export class AnimateScroll extends Component {
  constructor(props) {
    super(props);
    this.heightTimeout = 0;
    this.divTimeout = 0;
    this.state = {showOne: true, showTwo: false, heightOne: 0, animationOneTime: 0, heightTwo:0, animationTwoTime: 0};
  }

  componentDidMount() {
    this.getHeight();
  }

  trigger = () => {
    console.log('---------------trigger--------------');
    if(this.state.showOne) {
      console.log('timeout called one');
      clearTimeout(this.divTimeout);
      this.divTimeout = setTimeout(() => this.setState({showOne: false, showTwo: true}), this.state.animationOneTime*1000);
    }
    if(this.state.showTwo) {
      console.log('timeout called two');
      clearTimeout(this.divTimeout);
      this.divTimeout = setTimeout(() => this.setState({showOne: true, showTwo: false}), this.state.animationTwoTime*1000);
    }
  }

  getHeight = () => {
    try {
      let heightOne = this.refs['one']['offsetHeight'];
      let heightTwo = this.refs['two']['offsetHeight'];
      if(heightOne !== this.state.heightOne) {
        let time = heightOne/SPEED;
        this.setState({heightOne, animationOneTime: time}, this.trigger);
      }
      if(heightTwo !== this.state.heightTwo) {
        let time = heightTwo/SPEED;
        this.setState({heightTwo, animationTwoTime: time}, this.trigger);
      }
      this.timeout = setTimeout(this.getHeight, 5000);
      } catch (err) {
        console.error('REF undefined');
      }
  }

  componentDidCatch(e) {
    console.error('Error in component', e);
  }

  componentWillMount() {
    clearTimeout(this.heightTimeout);
  }

  render() {
    return (
      <div className='animation-parent'>
        <div
          id='one'
          ref='one'
          className={`one ${this.state.showOne? '': 'hide'}`}
          style={this.state.showOne ? {animation: `scroll-top ${this.state.animationOneTime}s linear`} : null}
        >
          {this.props.children}
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
        </div>
        <div
          id='two'
          ref='two'
          className={`two ${this.state.showTwo? '': 'hide'}`}
          style={this.state.showTwo ? {animation: `scroll-top ${this.state.animationTwoTime}s linear`} : null}
        >
          {this.props.children}
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
        </div>
      </div>
    )
  }

}