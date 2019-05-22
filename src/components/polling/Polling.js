import React, { Component } from 'react';
import {Overlay, Card} from './Overlay';

class Polling extends Component {
  constructor(props) {
    super(props);
    // like
    // 0: no action,
    // 1: liked,
    // 2: unlike
    this.timeoutId = null;
    this.state = {selected: null, like: 0, votes: {up: 359, down: 59}};
  }

  // componentDidMount() {
  //   fetch('https://devapi.fankave.com/v1.0/cms/content/social?ctag=bethebridge&filter=&contentType=photo')
  //   .then(e => e.json())
  //   .then(e => this.setState({data: e}))
  //   .catch(err => console.error('Err: ', err));
  // }

  // intersected = (e) => {

  // }

  reset = (timeout=5000) => {
    this.timeoutId = setTimeout(() => this.setState({selected: null, like: 0}), timeout);
  }

  selected = (e) => {
    this.setState({selected: e});
    clearTimeout(this.timeoutId);
    this.reset();
  }

  close = () => {
    this.setState({selected: null, like: 0});
  }

  vote = (val) => {
    if(val === 1) {
      this.setState(prevState => ({like: val, votes: {up: prevState.votes.up+1, down: prevState.votes.down}}));
    } else if(val === 2) {
      this.setState(prevState => ({like: val, votes: {up: prevState.votes.up, down: prevState.votes.down+1}}))
    }
    clearTimeout(this.timeoutId);
    this.reset(2000);
  }

  render() {
    return (
      <div>
        {!!this.state.selected ? <div className='overlay-parent'></div>: null }
        {!!this.state.selected ?
          <Overlay
            info={this.state.selected} closeAction={this.close} like={this.state.like} votedAction={this.vote}
            votes={this.state.votes}
          /> : null
        }
        <div className={`initial`}>
          <div className={`col col-1 ${this.state.selected? 'pause' : ''}`}>
            { this.props.feed.filter((e, i) => i%2 !== 0).map(e => <Card key={e.getId()} info={e} selected={this.selected} />) }
          </div>
          <div className={`col col-2 ${this.state.selected? 'pause' : ''}`}>
            { this.props.feed.filter((e, i) => i%2 === 0).map(e => <Card key={e.getId()} info={e} selected={this.selected} />) }
          </div>
        </div>
      </div>
    )
  }
}

export default Polling;