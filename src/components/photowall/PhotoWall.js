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
      showBackgroundCaption: false // When tiles are zoomed, the caption will not have empty spaces
    }
    this.showTiles()

    //Start zooming in the tiles after a delay
    setTimeout(() => {
      this.zoomIn()
    }, 10000);
  }

  showTiles() {
    setTimeout(() => {
      this.setState({show: true})
    }, 1000);
  }

  zoomIn() {
    let maxTiles = this.props.photosGrid.length;
    let cardDisplayTime = this.props.componentConfig.cardDisplayTime ?
        this.props.componentConfig.cardDisplayTime * 1000 : null;
    this.setState({
      zoomedInTile: getRandomInt(0, maxTiles-1),
      showBackgroundCaption: true
    })
    setTimeout(this.zoomOut.bind(this), cardDisplayTime || 8000)
  }

  zoomOut() {
    this.setState({
      zoomedOutTile: this.state.zoomedInTile,
      zoomedInTile: -1
    })
    setTimeout(this.zoomIn.bind(this), 4000)
  }

  zoomTile(i) {
    this.setState({
      zoomedOutTile: this.state.zoomedInTile,
      zoomedInTile: i
    })
  }

  layTiles() {
    return lodash.map(this.props.photosGrid, (photoGrid, i) => {
      return (
        <div onClick={this.zoomTile.bind(this,i)} key={i}>
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