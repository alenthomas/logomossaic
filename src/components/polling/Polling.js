import React, { Component } from 'react';
import _ from 'lodash';
import {Overlay, Card} from './Overlay';
import {queryString, handleError} from '../../Helper.js';
import { getVotes, postVotes } from '../../Services.js';

const SPEED = 5;
class Polling extends Component {
  constructor(props) {
    super(props);
    // like
    // 0: no action,
    // 1: liked,
    // 2: unlike
    this.timeoutId = null;
    this.state = {selected: null, like: 0, votes: {up: 0}, heightOne: 0, heightTwo: 0, animationOneTime: 0, animationTwoTime: 0};
  }

  componentDidMount() {
    // if(this.state.heightOne === 0 || this.state.heightTwo === 0) {
      this.getHeight();
    // }
  }

  setVote = (result) => {
    if(result.data) {
      let {ctag} = queryString();
      let votes = result.data.polls.filter(e => e.name === ctag);
      if(votes.length > 0) {
        this.setState({votes: {up: votes[0]['votes']}});
      }
    }
  }

  updateVote = (result) => {
    if(result.success) {
      this.setState({like: 1, votes: {up: result.data.votes}});
    }
  }

  reset = (timeout=5000) => {
    this.timeoutId = setTimeout(() => this.setState({selected: null, like: 0, votes: {up: 0}}), timeout);
  }

  selected = (e) => {
    this.setState({selected: e, votes: {up: 0}});
    getVotes(e.getId(), this.setVote, handleError);
    clearTimeout(this.timeoutId);
    this.reset();
  }

  getHeight = () => {
    let heightOne = this.refs['one']['offsetHeight'];
    let heightTwo = this.refs['two']['offsetHeight'];
    if(heightOne > 0) {
      let animationOneTime = heightOne/SPEED;
      this.setState({heightOne, animationOneTime});
    }
    if(heightTwo > 0) {
      let animationTwoTime = heightOne/SPEED;
      this.setState({heightTwo, animationTwoTime});
    }
  }

  close = () => {
    this.setState({selected: null, like: 0, votes: {up: 0}});
  }

  vote = (val) => {
    if(val === 1) {
      let {ctag} = queryString();
      let meta = {social: this.state.selected.getSource(), username: this.state.selected.getAuthorName(), handle: this.state.selected.data.author.handle || this.state.selected.data.author.alias || null, userpic: this.state.selected.getAuthorPhoto()};
      let cleanedMeta = _.omitBy(meta, _.isNil);
      postVotes(this.state.selected.getId(), ctag, this.state.selected.getPhotoUrl(), cleanedMeta, this.updateVote, handleError);
    }
    clearTimeout(this.timeoutId);
    this.reset(5000);
  }

  render() {
    return (
      <div className='parent'>
        {!!this.state.selected ?
        <div>
          <div className='overlay-parent' />
          <Overlay
            info={this.state.selected} closeAction={this.close} like={this.state.like} votedAction={this.vote}
            votes={this.state.votes}
          /> </div> : null
        }
        <div className={`initial`}>
          <div ref="one" className={`col col-1 ${this.state.selected? 'pause' : ''}`} style={{animation: `scroll-up ${this.state.animationOneTime}s 3s linear infinite`}}>
            { this.props.feed.filter((e, i) => i%2 !== 0).map(e => <Card key={e.getId()} info={e} selected={this.selected} />) }
          </div>
          <div ref="two" className={`col col-2 ${this.state.selected? 'pause' : ''}`} style={{animation: `scroll-up ${this.state.animationTwoTime}s 3s linear infinite`}}>
            { this.props.feed.filter((e, i) => i%2 === 0).map(e => <Card key={e.getId()} info={e} selected={this.selected} />) }
          </div>
        </div>
      </div>
    )
  }
}

export default Polling;