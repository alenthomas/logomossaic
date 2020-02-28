import React, { Component } from 'react';
import { getRandomFloat, getRandomInt } from '../../Helper.js';
import classNames from 'classnames';
import ParsedText from '../ParsedText.js';

const TILE_SIZE = {
  DEFAULT: { WIDTH: 225, HEIGHT: 225 },
  ZOOMED: {
    LANDSCAPE: { WIDTH: 600, HEIGHT: 450 },
    PORTRAIT: { WIDTH: 750, HEIGHT: 450 }
  }
};

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  componentDidUpdate(nextProps) {
    let { zoomIn, zoomOut } = nextProps;
    if (zoomIn) {
      setTimeout(() => {
        this.setState({ showInfo: true });
      }, 2000);
    }
    if (zoomOut) {
      if (this.state.showInfo) {
        this.setState({ showInfo: false });
      }
    }
  }

  getTileClass() {
    let { show, zoomIn, zoomOut, photoGrid, photos } = this.props;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    return classNames({
      phototile: true,
      show: show,
      zoomIn: zoomIn,
      zoomOut: zoomOut,
      portrait: !photo.isLandscape()
    });
  }

  getTileStyle() {
    let WIDTH = this.props.width || TILE_SIZE.DEFAULT.WIDTH;
    let HEIGHT = this.props.height || TILE_SIZE.DEFAULT.HEIGHT;
    let { zoomIn, photoGrid, photos } = this.props;
    let topOffset = -50;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    // console.log('photo', photo)
    let zoomDimensions = photo && photo.isLandscape()
      ? TILE_SIZE.ZOOMED.LANDSCAPE
      : TILE_SIZE.ZOOMED.PORTRAIT;
    return {
      left: zoomIn
        ? `calc(50vw - ${zoomDimensions.WIDTH / 2}px)`
        : photoGrid.left,
      top: zoomIn
        ? `calc(50vh - ${zoomDimensions.HEIGHT / 2 + topOffset}px)`
        : photoGrid.top,
      width: zoomIn ? zoomDimensions.WIDTH : WIDTH,
      height: zoomIn ? zoomDimensions.HEIGHT : HEIGHT,
      transform: `translateZ(${getRandomInt(5000, 8000)}px)`,
      transition: `transform ${getRandomFloat(
        0.5,
        1
      )}s ease-out ${getRandomFloat(1, 5)}s, opacity 1s ease ${getRandomFloat(
        6,
        8
      )}s`
    };
  }

  getImageStyle() {
    let WIDTH = this.props.width || TILE_SIZE.DEFAULT.WIDTH;
    let HEIGHT = this.props.height || TILE_SIZE.DEFAULT.HEIGHT;
    let { photoGrid, zoomIn, photos } = this.props;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    // let photo = photoGrid.photo;
    let padding = 10;
    let width = photo.isLandscape()
      ? zoomIn
        ? TILE_SIZE.ZOOMED.LANDSCAPE.WIDTH - padding * 2
        : HEIGHT * photo.getAspectRatio()
      : zoomIn
      ? (TILE_SIZE.ZOOMED.PORTRAIT.HEIGHT - padding * 2) *
        photo.getAspectRatio()
      : WIDTH;
    return { width: width };
  }

  getTruncatedText() {
    let textLength = 350;
    let { photoGrid, photos } = this.props;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    let text = photo.getText();
    return text.length <= textLength
      ? text
      : text.substr(0, textLength) + '...';
  }

  getInfo() {
    let { photoGrid, zoomIn, photos } = this.props;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    let text = this.getTruncatedText();
    if (zoomIn) {
      return (
        <div className={classNames('info', { visible: this.state.showInfo })}>
          <div className="head">
            <img src={photo.getAuthorPhoto()} alt="" />
            <ParsedText tag="span" data={photo.getAuthorName()} />
            <span className="handle">{photo.getAuthorHandle()}</span>
          </div>
          <ParsedText data={text} />
        </div>
      );
    }
  }

  render() {
    let { photoGrid, photos } = this.props;
    let index = parseInt(photoGrid.index, 10);
    let photo = photos[index];
    // let photo = photoGrid.photo;
    let tileStyle = this.getTileStyle();
    let caption = this.props.caption;
    let captionStyle = { left: -tileStyle.left, top: -tileStyle.top };
    return (
      <div className={this.getTileClass()} style={tileStyle}>
        <img
          src={photo.getThumbnailUrl()}
          style={this.getImageStyle()}
          alt=""
        />
        {this.getInfo()}
        <ParsedText className="caption" style={captionStyle} data={caption} />
      </div>
    );
  }
}

export { Tile, TILE_SIZE };
