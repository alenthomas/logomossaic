import React, { Component } from 'react';
import {Overlay, Card} from './Overlay';
import {queryString} from '../../Helper.js';

let URL = 'http://devapi.fankave.com/ids'

class Polling extends Component {
  constructor(props) {
    super(props);
    // like
    // 0: no action,
    // 1: liked,
    // 2: unlike
    this.timeoutId = null;
    this.state = {selected: null, like: 0, votes: {up: 0}};
  }

  getVotes = (_id) => {
    fetch(`${URL}/polling/getPoll?id=${_id}`)
    .then(res => res.json())
    .then(result => {
      if(result.data) {
        let {ctag} = queryString();
        let votes = result.data.polls.filter(e => e.name === ctag)
        if(votes.length > 0) {
          this.setState({votes: {up: votes[0]['votes']}});
        }
      }
      console.log('api data', result.data);
    })
  }

  postVotes = (_id) => {
    let {ctag} = queryString();
    fetch(`${URL}/polling/addPoll`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": _id, "contest": ctag})
    })
    .then(res => res.json())
    .then(result => {
      if(result.success) {
        this.setState({like: 1, votes: {up: result.data.votes}});
      }
    })
  }

  reset = (timeout=5000) => {
    this.timeoutId = setTimeout(() => this.setState({selected: null, like: 0, votes: {up: 0}}), timeout);
  }

  selected = (e) => {
    this.setState({selected: e, votes: {up: 0}});
    this.getVotes(e.getId());
    clearTimeout(this.timeoutId);
    // this.reset();
  }

  close = () => {
    this.setState({selected: null, like: 0, votes: {up: 0}});
  }

  vote = (val) => {
    if(val === 1) {
      this.postVotes(this.state.selected.getId());
    }
    clearTimeout(this.timeoutId);
    this.reset(5000);
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