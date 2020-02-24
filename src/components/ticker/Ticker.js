import React, { Component } from 'react';

import Tweet from './Tweet.js';

export const SCROLL_SPEED = 100;

export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTweet: -1,
      tweetList: []
    }
    this.tweetRefs = []
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    let newTweets = newProps.feed.getAdded();
    if(newTweets.length > 0) {
      let newList = this.state.tweetList;
      newList.splice(this.state.currentTweet+1, 0, ...newTweets);
      this.setState({tweetList: newList});
    }
  }

  componentDidMount() {
    setTimeout(this.scrollTweet.bind(this), 1000);
  }

  scrollTweet() {
    let {tweetList, currentTweet} = this.state,
        nextTweet = (currentTweet+1) % tweetList.length,
        nextTweetComponent = this.tweetRefs[nextTweet],
        nextTweetWidth = nextTweetComponent.getWidth(),
        nextTweetEndTime = nextTweetWidth / SCROLL_SPEED;
    
    this.setState({currentTweet: nextTweet});
    setTimeout(this.scrollTweet.bind(this), nextTweetEndTime*1000);
  }

  render() {
    let tweets = this.state.tweetList;
    if(tweets.length === 0) return false;
    

    let {currentTweet} = this.state;
    return (
      <div className="ticker">
        {
          tweets.map((tweet,i) => {
            let scroll = (i === currentTweet) || (i === currentTweet-1);
            return <Tweet ref={(tweet) => this.tweetRefs[i] = tweet} key={tweet.id} tweet={tweet} scroll={scroll}/>
          })
        }
      </div>
    )
  }
}