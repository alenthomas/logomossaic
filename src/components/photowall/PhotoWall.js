import lodash from 'lodash';
import React, { Component } from 'react';
import {getRandomInt} from '../../Helper.js'
import {Tile} from './Tile.js';

import './photo-wall.css';

class PhotoWall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: props.componentConfig.tileBgText,
      showBackgroundCaption: false, // When tiles are zoomed, the caption will not have empty spaces
      lastEvent: -1
    }
    this.showTiles()
  }

  componentWillMount() {
    //Start watcher for every second
    this.interval = setInterval(() => {
      this.watcher()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  now() {
    return new Date().getTime() / 1000;
  }

  watcher() {
    let timeSinceLastEvent = this.now() - this.state.lastEvent
    if(timeSinceLastEvent > 5 && this.state.zoomedInTile === -1) {
      this.zoomIn();
    } else if(timeSinceLastEvent > 5 && this.state.zoomedInTile !== -1) {
      this.zoomOutCurrentTile();
    }
  }

  showTiles() {
    setTimeout(() => {
      this.setState({
        show: true,
        lastEvent: this.now()
      })
    }, 1000);
  }

  zoomOutCurrentTile() {
    if(this.state.zoomedInTile !== -1) {
      this.setState({
        zoomedOutTile: this.state.zoomedInTile,
        zoomedInTile: -1,
        lastEvent: this.now()
      })
    }
  }

  zoomIn(tileNum) {
    this.zoomOutCurrentTile();
    let maxTiles = this.props.photosGrid.length;
    tileNum = tileNum || getRandomInt(0, maxTiles-1);
    this.setState({
      zoomedOutTile: this.state.zoomedInTile,
      zoomedInTile: tileNum,
      lastEvent: this.now(),
      showBackgroundCaption: true,
    })
  }

  layTiles() {
    return lodash.map(this.props.photosGrid, (photoGrid, i) => {
      return (
        <div onClick={this.zoomIn.bind(this,i)} key={i}>
          <Tile photoGrid={photoGrid} caption={this.state.caption}
            show={this.state.show} zoomIn={this.state.zoomedInTile === i} zoomOut={this.state.zoomedOutTile === i}>
          </Tile>
        </div>
      )
    })
  }

  render() {
    let bgCaptionStyle = {
      display: this.state.showBackgroundCaption ? 'block' : 'none'
    }
    return (
      <div className='photo-wall'>
        <div className='caption' style={bgCaptionStyle}>{this.state.caption}</div>
        {this.layTiles()}
      </div>
    )
  }
}

export default PhotoWall