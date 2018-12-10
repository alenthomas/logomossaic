import React, { Component } from 'react';
import lodash from 'lodash';
import TweetCard from './TweetCard.js';
import {getCreatedAt} from './helpers.js';

// Please refer the below link for more details on Carousel implementation.
// https://desandro.github.io/3dtransforms/docs/carousel.html

const ROTATE_INTERVAL = 8000;
export const CARD_SWAP_OFFSET = 3; // Start swapping cards only after the first three cards to avoid it seen on the screen

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    let feed = this.props.feed;
    let allData = feed.getAll();
    let sides = this.calculateSides();
    let {rotateY, translateZ} = this.computeTransformations(sides);
    let currentCards = lodash.compact(allData.splice(0, sides));
    this.state = {
      cardsToAdd: allData,
      cardsToRemove: [],
      currentCards: currentCards,
      sides: sides,
      rotateY: rotateY,
      translateZ: translateZ,
      rotationIndex: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    let feed = nextProps.feed;
    let newState = {};
    this.state.cardsToAdd.unshift(...feed.getAdded());
    newState.cardsToAdd = this.state.cardsToAdd;
    newState.cardsToRemove = this.state.cardsToRemove.concat(feed.getRemoved());
    // TODO If cards to remove are present in cards to add, remove them immediately
    this.setState(newState);
  }

  componentDidMount() {
    this.rotateTimer = setInterval(this.rotate.bind(this), ROTATE_INTERVAL);
    window.rotate = this.rotate.bind(this); // To debug, enable this line and control rotation manually
  }

  componentWillUnMount() {
    clearInterval(this.rotateTimer);
  }

  calculateSides() {
    let allData = this.props.feed.getAll();
    return (this.props.type === "cube") ?  Math.min(allData.length, 4) : Math.min(allData.length, 16);
  }

  computeTransformations(sides) {
    let cardWidth = 1020;
    let gapBetweenCards = 200;
    return {
      'rotateY': 360 / sides,
      'translateZ': Math.round(( cardWidth / 2 ) / Math.tan( Math.PI / sides )) + gapBetweenCards
    }
  }

  computeZoomOut() {
    // https://mycurvefit.com/ Found the exponential curve that matches the 3d perspective card view for
    // different screen heights
    let offset = 3341497000 * window.innerHeight ** -2.387867;
    return -(this.state.translateZ + offset);
  }

  getCardStyle(position) {
    return {
      transform: `rotateY(${position * this.state.rotateY}deg) translateZ(${this.state.translateZ}px)`,
      opacity: position === (this.state.rotationIndex % this.state.sides) ? 1 : 0.5
    };
  }

  rotate() {
    let rotationIndex = this.state.rotationIndex + 1;
    let {cardsToAdd, cardsToRemove, currentCards} = this.state;

    if(this.isCardSwapNeeded()) {
      let swapIndex = this.getSwapIndex();
      let cardToSwap = currentCards[swapIndex];
      currentCards[swapIndex] = cardsToAdd.splice(0, 1)[0];
      let toRemove = lodash.remove(cardsToRemove, c => c.id === cardToSwap.id);
      if(toRemove.length === 0) {
        cardsToAdd.push(cardToSwap); // Queue it to the end to show it later
      }
    }
    this.setState({rotationIndex, cardsToAdd, cardsToRemove, currentCards});
  }

  isCardSwapNeeded() {
    return (this.state.rotationIndex >= CARD_SWAP_OFFSET) && (this.state.cardsToAdd.length > 0);
  }

  getSwapIndex() {
    let upcomingHiddenCardIndex = (this.state.rotationIndex + CARD_SWAP_OFFSET) % this.state.sides,
        upcomingHiddenCard = this.state.currentCards[upcomingHiddenCardIndex],
        upcomingHiddenCardCreatedAt = getCreatedAt(upcomingHiddenCard);
    let newCardToAdd = this.state.cardsToAdd[0],
        newCardCreatedAt = getCreatedAt(newCardToAdd);

    if(newCardCreatedAt > upcomingHiddenCardCreatedAt) {
      return upcomingHiddenCardIndex;
    } else {
      return (this.state.rotationIndex - CARD_SWAP_OFFSET) % this.state.sides;
    }
  }

  render() {
    console.log('new')
    let carouselRotation = -this.state.rotationIndex * this.state.rotateY;
    let carouselStyle = {
      transform: `translate(-50%, -50%) translateZ(${this.computeZoomOut()}px) rotateY(${carouselRotation}deg)`
    }

    return (
      <div className="carousel" style={carouselStyle}>
        {
          lodash.map(this.state.currentCards, (datum, i) => {
            let className = (this.state.rotationIndex % this.state.sides) === i ? 'shine' : '';
            return <TweetCard key={datum.id} data={datum} className={className} style={this.getCardStyle(i)}/>
          })
        }
      </div>
    )
  }

}