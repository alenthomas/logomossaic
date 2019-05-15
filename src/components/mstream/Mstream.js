import React, { Component } from 'react';
import TweetCard from './../mediacarousel/TweetCard';
import Observer from '@researchgate/react-intersection-observer';
const uuidv1 = require('uuid/v1');

function displayOption (width) {
  if(width === 320) {
    return 'first';
  }
  if(width === 640) {
    return 'second';
  }
  return 'first';
}
export default class MasonaryStreamV2 extends Component {
  constructor(props) {
    super(props);
    let data = [];
    if(props.data.length > 0) {
      data = props.data;
    }
    this.state = {width: 0, height: 0, data, count: [20, 20], repeat: 1, data2: [], exp: 1};
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

  componentWillReceiveProps(prevProps) {
    // console.log('\nprevProps', prevProps);
  }

  intersected = (e) => {

    if(e.isIntersecting) {
      console.log('>> getting more content: ', e.target.attributes['data-card-id'].value);
      let v = parseInt(e.target.attributes['data-card-id'].value);
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
    console.log('>> addding new data to : ', v);
    console.log('>> state: ', this.state.data.length);
    console.log('>> count: ', this.state.count);
    let min;
    if(this.state.exp === 2) {
      min = Math.max.apply(Math, this.state.count);
      min=min*2;
    } else {
      min = this.state.count[v];
    }
    console.log(this.state.data.length - min <= 20);
    if(this.state.data.length - min <= 20) {
      let data = this.props.data;
      if(data[data.length-1].id !== this.state.data[this.state.data.length-1].id) {
        console.log('here 1');
        this.setState((prevState) => ({data: [...prevState.data, ...data]}))
        return;
      } else {
        this.setState((prevState) => {
          console.log('here 2');
          let uuid = uuidv1();
          let repeatData = prevState.data.slice(0, 100).map(e => ({...e, id: e.id+uuid}));
          console.log('data', prevState.data, repeatData);
          return ({data: [...prevState.data, ...repeatData]});
        })
        return;
      }
    }
  }

  renderWrapper = (exp) => {
    // console.log(">> exp: ", exp, this.state);
    const options = {
      onChange: this.intersected,
      root: null,
      threshold: 1.0,
      triggerOnce: true
    };
    if(exp === 2) {
      return (
        <div className='parent'>
          <Wrapper id={0} cardCount={this.state.count[0]}>
            {this.state.data.filter((e, i) => i <=this.state.count[0]-1).filter((e, i) => i%2 === 0).map((e, i) => {
              if(i === this.state.count[0]-13) {
                console.log(">> observer 0: ", this.state.count[0]-13)
                return (
                  <Observer {...options} key={e.id}>
                    <div data-card-id={0}> {/* TODO remove this wrapper */}
                      <TweetCard data={e} key={e.id} />
                    </div>
                  </Observer>
                )
              }
              return (<TweetCard data={e} key={e.id} />)
            })}
          </Wrapper>
          <Wrapper id={1} cardCount={this.state.count[1]}>
            {this.state.data.filter((e, i) => i <=this.state.count[1]-1).filter((e,i) => i%2 !== 0).map((e, i) => {
              if(i === this.state.count[1]-13) {
                console.log(">> observer 1: ", this.state.count[1]-13)
                return (
                  <Observer {...options} key={e.id}>
                    <div data-card-id={1}> {/* TODO remove this wrapper */}
                      <TweetCard data={e} key={e.id} />
                    </div>
                  </Observer>
                )
              }
              return (<TweetCard data={e} key={e.id} />)
            })}
          </Wrapper>
        </div>
      )
    }
    return (
      <Wrapper cardCount={this.state.count[0]}>
        {this.state.data.filter((e, i) => i <=this.state.count[0]-1).map((e, i) => {
          if(i === this.state.count[0]-3) {
            // console.log(">> observer", this.state.count-3)
            return (
              <Observer {...options} key={e.id}>
                <div data-card-id={0}> {/* TODO remove this wrapper */}
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

  render() {
    // console.log(this.props.data, this.state);
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
      <div id={this.props.id} className='mstream-wrapper' style={{animation: `scroll ${this.props.cardCount*3.8 + 5}s linear infinite`}}>
        {this.props.children}
      </div>
    )
  }
}

