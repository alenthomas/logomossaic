import React, {Component} from 'react';
import TweetCard from '../mediacarousel/TweetCard.js';
import classNames from 'classnames';
import {TIME_PER_SLIDE} from './StatsView.js';

class TopTweets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCardIndex: -1
    }
  }
  
  componentDidMount() {
    let noOfTweetsToShow = 2;
    this.setState({currentCardIndex: 0});
    this.swapper = setInterval(this.swapCard.bind(this), (TIME_PER_SLIDE - 1000)/noOfTweetsToShow);
  }

  componentWillUnmount() {
    clearTimeout(this.swapper);
  }

  swapCard() {
    let nextCardIndex = (this.state.currentCardIndex + 1) % this.props.tweets.length;
    this.setState({currentCardIndex: nextCardIndex});
  }

  render() {
    let {currentCardIndex} = this.state;
    return (
      <div className="top-tweets">
        <div className="subheading">Top Social Posts</div>
        {
          this.props.tweets.map((tweet,i) => {
            return (
              <div className={classNames("card", {"show": i === currentCardIndex})} key={i}>
                <TweetCard data={tweet}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TopTweets;