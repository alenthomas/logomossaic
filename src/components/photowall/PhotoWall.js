import lodash from 'lodash';
import React, { Component } from 'react';
import { getRandomInt } from '../../Helper.js';
import { Tile } from './Tile.js';

import './photo-wall.css';

const AVERAGE_TILES_DISPLAY_TIME = 7000; // Time taken for the tiles to align after animation
class PhotoWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: props.componentConfig.tileBgText,
      showBackgroundCaption: false, // When tiles are zoomed, the caption will not have empty spaces
      lastEvent: -1,
      tileNum: -1
    };
    this.showTiles();
  }

  UNSAFE_componentWillMount() {
    //Start watcher for every second
    this.interval = setInterval(() => {
      this.watcher();
    }, 1000);

    // one time function to customize the load time of first tile zoomIn
    const { initialLoadTime } = this.props.componentConfig;
    this.initialload = setTimeout(() => {
      this.zoomIn();
    }, initialLoadTime * 1000 + AVERAGE_TILES_DISPLAY_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.initialload);
  }

  now() {
    return new Date().getTime() / 1000;
  }

  watcher() {
    const { cardDisplayTime, interval } = this.props.componentConfig;
    let timeSinceLastEvent = this.now() - this.state.lastEvent;
    if (timeSinceLastEvent > interval && this.state.zoomedInTile === -1) {
      this.zoomIn();
    } else if (
      timeSinceLastEvent > cardDisplayTime &&
      this.state.zoomedInTile !== -1
    ) {
      this.zoomOutCurrentTile();
    }
  }

  showTiles() {
    setTimeout(() => {
      this.setState({
        show: true,
        lastEvent: this.now()
      });
    }, 1000);
  }

  zoomOutCurrentTile() {
    if (this.state.zoomedInTile !== -1) {
      this.setState({
        zoomedOutTile: this.state.zoomedInTile,
        zoomedInTile: -1,
        lastEvent: this.now()
      });
    }
  }

  zoomIn(tileNum) {
    this.zoomOutCurrentTile();
    let { showFirst, loadSequentially } = this.props.componentConfig;
    let maxTiles = this.props.photosGrid.length;
    // sequentially zoomIn first N photos
    if (loadSequentially && this.state.tileNum < showFirst) {
      let newTileNum = this.state.tileNum + 1;
      this.setState({
        zoomedOutTile: this.state.zoomedInTile,
        zoomedInTile: newTileNum,
        lastEvent: this.now(),
        showBackgroundCaption: true,
        tileNum: newTileNum
      });
      return;
    }
    tileNum = tileNum || getRandomInt(0, maxTiles - 1);
    this.setState({
      zoomedOutTile: this.state.zoomedInTile,
      zoomedInTile: tileNum,
      lastEvent: this.now(),
      showBackgroundCaption: true
    });
  }

  layTiles() {
    return lodash.map(this.props.photosGrid, (photoGrid, i) => {
      return (
        <div onClick={this.zoomIn.bind(this, i)} key={i}>
          <Tile
            photoGrid={photoGrid}
            caption={this.state.caption}
            show={this.state.show}
            zoomIn={this.state.zoomedInTile === i}
            zoomOut={this.state.zoomedOutTile === i}
            width={this.props.cardWidth}
            height={this.props.cardHeight}
          ></Tile>
        </div>
      );
    });
  }

  render() {
    let bgCaptionStyle = {
      display: this.state.showBackgroundCaption ? 'block' : 'none'
    };
    return (
      <div className="photo-wall">
        <div className="caption" style={bgCaptionStyle}>
          {this.state.caption}
        </div>
        {this.layTiles()}
      </div>
    );
  }
}

export default PhotoWall;
