import React, { Component } from 'react';
import './animationscroll.css';
import _ from 'lodash';

const SPEED = 25;

export class AnimateScroll extends Component {
  constructor(props) {
    super(props);
    this.triggerTimeout = 0;
    this.state = {showOne: true, showTwo: false, height: 0, started: false, animationTime: 0};
  }

  componentDidMount() {
    this.getHeight();
  }

  initiateTrigger = () => {
    clearTimeout(this.triggerTimeout);
    let timeout = (this.state.animationTime)*1000;
    this.triggerTimeout = setTimeout(this.trigger, timeout);
    return;
  }

  trigger = () => {
    if(this.state.showOne) {
      this.setState({showOne: false, showTwo: true}, this.initiateTrigger);
      return;
    }
    if(this.state.showTwo) {
      this.setState({showOne: true, showTwo: false, started: true}, this.initiateTrigger);
      return;
    }
  }

  getHeight = () => {
    let height = this.refs['one']['offsetHeight'];
    if(height > 0) {
      let animationTime = height/SPEED;
      this.setState({height, animationTime}, this.trigger);
    }
  }

  componentDidCatch(e) {
    console.error('Error in component', e);
  }

  componentWillMount() {
    clearTimeout(this.triggerTimeout);
  }

  render() {
    // console.log(this.state);
    return (
      <div className='animation-parent'>
        <div
          ref='one'
          className={`one ${this.state.started? 'align-bottom': ''} ${this.state.showOne? '': 'hide'}`}
          style={this.state.showOne ? {animation: `scroll-top ${this.state.animationTime}s ${!this.state.started ? '2s': '0s'} linear`} : null}
        >
          {this.props.children}
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
        </div>
        <div
          ref='two'
          className={`two ${this.state.started? 'align-bottom': ''} ${this.state.showTwo? '': 'hide'}`}
          style={this.state.showTwo ? {animation: `scroll-top ${this.state.animationTime}s ${!this.state.started ? '2s': '0s'} linear`} : null}
        >
          {this.props.children}
            <div className={`end ${this.props.children.length > 0 ? '': 'hide'}`}>{this.props.endData}</div>
        </div>
      </div>
    )
  }

}