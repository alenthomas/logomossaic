import React, { Component } from 'react';
import _ from 'lodash';

import TweetCard from './../mediacarousel/TweetCard';
import Observer from '@researchgate/react-intersection-observer';
const uuidv1 = require('uuid/v1');

export default class MasonaryStreamV2 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {width: 0, height: 0, data, count: [20, 20], repeat: 1, exp: 0};
  }
  componentDidMount() {
    let width = window.screen.width * window.devicePixelRatio;
    let height = window.screen.height * window.devicePixelRatio;
    let exp;
    if (width === 640) {
      exp = 2;
    } else {
      exp = 1;
    }
    this.setState({width, height, exp});
  }

  intersected = (e) => {

    if(e.isIntersecting) {
      let v = parseInt(e.target.attributes['data-card-id'].value, 10);
      this.getMoreContent(v);
    }
  }

  getMoreContent = (v) => {
    this.setState((prevState) => {
      let count = [...prevState.count];
        count[v] += 10
      return ({count})
    }, () => this.addNewData(v));
  }

  addNewData = (v) => {
    let min;
    if(this.state.exp === 2) {
      min = Math.max.apply(Math, this.state.count);
      min *= 2;
    } else {
      min = this.state.count[v];
    }
    if(this.state.data.length - min <= 20) {
      let data = this.props.data;
      let propDataLength = this.props.data.length;
      if(data[data.length-1].id !== this.state.data.slice(0, propDataLength)[propDataLength-1].id) {
        this.setState((prevState) => {
          let newData = _.unionBy([...prevState.data, ...data], 'id');
          return ({data: newData})
        })
        return;
      } else {
        this.setState((prevState) => {
          let uuid = uuidv1();
          let repeatData = prevState.data.slice(0, 100).map(e => ({...e, id: e.id+uuid}));
          return ({data: [...prevState.data, ...repeatData]});
        })
        return;
      }
    }
  }

  renderWrapper = (exp) => {
    const options = {
      onChange: this.intersected,
      root: null,
      threshold: 1.0,
      triggerOnce: true
    };
    if(exp === 2) {
      let data1 = this.state.data.filter((e, i) => i%2 === 0).map((e, i) => {
        let index = Math.round(this.state.data.length/2) - 4;
        if(i === index) {
          return (
            <Observer {...options} key={e.id}>
              <div data-card-id={0}>
                <TweetCard data={e} key={e.id} />
              </div>
            </Observer>
          )
        }
        return (<TweetCard data={e} key={e.id} />);
      });
      let data2 = this.state.data.filter((e, i) => i%2 !== 0).map((e, i) => {
        let index = Math.round(this.state.data.length/2) - 4;
        if(i === index) {
          return (
            <Observer {...options} key={e.id}>
              <div data-card-id={1}>
                <TweetCard data={e} key={e.id} />
              </div>
            </Observer>
          )
        }
        return (<TweetCard data={e} key={e.id} />);
      });
      return (
        <div className='parent'>
          <Wrapper id={0} cardCount={data1.length}>
            {data1}
          </Wrapper>
          <Wrapper id={1} cardCount={data2.length}>
            {data2}
          </Wrapper>
        </div>
      )
    } else if(exp === 1){
      return (
        <Wrapper cardCount={this.state.data.length}>
          {this.state.data.map((e, i) => {
            let index = Math.round(this.state.data.length) - 4;
            if(i === index) {
              return (
                <Observer {...options} key={e.id}>
                  <div data-card-id={0}>
                    <TweetCard data={e} key={e.id} />
                  </div>
                </Observer>
              )
            }
            return (<TweetCard data={e} key={e.id} />)
          })}
        </Wrapper>
      )
    }
  }

  render() {
    return (
      <div className='mstream'>
        { this.renderWrapper(this.state.exp) }
      </div>
    )
  }
};


class Wrapper extends React.Component {
  render() {

    return (
      <div id={'mstream-wrapper'} className='mstream-wrapper' style={{animation: `scroll ${this.props.cardCount*10}s linear infinite`}}>
        {this.props.children}
      </div>
    )
  }
}

