import _ from 'lodash';
import React, { Component } from 'react';
import { getRandomInt, generateGrid } from '../../Helper.js';
// import { generateGrid, handleError, getQueryString } from '../../Helper.js';

import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { Tile } from './Tile.js';

import './logomossaic.css';

const AVERAGE_TILES_DISPLAY_TIME = 70000; // Time taken for the tiles to align after animation

class LogoMossaic extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.image = null;
    this.state = {
      show: false,
      showBackgroundCaption: false, // When tiles are zoomed, the caption will not have empty spaces
      lastEvent: -1,
      tileNum: -1,
      data: null,
      n: null,
      divPoints: [],
      xIndex: null,
      yIndex: null,
      placements: [],
      randomString: ''
    };
    this.showTiles();
  }

  UNSAFE_componentWillMount() {
    this.interval = setInterval(() => {
      this.watcher();
    }, 1000);

    const { initialLoadTime } = this.props.componentConfig;
    this.initialload = setTimeout(() => {
      this.zoomIn();
    }, initialLoadTime * 1000 + AVERAGE_TILES_DISPLAY_TIME);

  }

  now() {
    return new Date().getTime() / 1000;
  }


  sortInWorker(points) {
    const workerInstance = worker();
    workerInstance.addEventListener('message', (message) => {
      if (message.data.result) {
        // console.log('points', message.data.result)
        this.setState({ divPoints: message.data.result }, this.processY);
      }
    })
    workerInstance.sort(points, 'x');
  }

  layTiles = () => {
    /*
    grid = [{left, top, src}, left, top, src]
    */
    if (this.state.placements.length <= 0) {
      return null;
    }
    // console.log('------------', this.state.placements.length)
    // console.log('--------------------', this.props.photos);
    // return null;
    return _.map(this.state.placements, (photoGrid, i) => {
      return (
        <div onClick={this.zoomIn.bind(this, i)} key={i}>
          <Tile
            photos={this.props.photos}
            photoGrid={photoGrid}
            caption={'cisco'}
            show={this.state.show}
            zoomIn={this.state.zoomedInTile === i}
            zoomOut={false}
            width={this.props.tileSize}
            height={this.props.tileSize}
          ></Tile>
        </div>
      );
    });
  }

  getDelaunayPoints() {
    let delaunayPoints = null;
    // Create an instance of your worker
    const workerInstance = worker()
    // Attach an event listener to receive calculations from your worker
    workerInstance.addEventListener('message', (message) => {
      if(_.isArrayLike(message.data)) {
        delaunayPoints = message.data
      } else if (delaunayPoints) {
        message.data && this.sortInWorker(delaunayPoints)
        return;
      } else {
        return;
      }
      return;
  })
    workerInstance.calculatePoints(this.state.data, this.state.data.width, this.state.data.height, this.state.n)
  }

  // componentDidUpdate() {
  //   console.log('in here as well')
  // }

  componentDidMount() {
    if (this.canvas && this.image) {
      // console.log('in canvas', 'in image')
      const ctx = this.canvas.getContext("2d")
      const img = this.image
      img.onload = () => {
        // console.log('in img onload')
        ctx.canvas.width = img.width;
        ctx.canvas.height = img.height;
        ctx.drawImage(img, 0, 0)
        const { data: rgba } = ctx.getImageData(0, 0, img.width, img.height);
        const data = new Float64Array(img.width * img.height);
        for (let i = 0, n = rgba.length / 4; i < n; ++i) {
          data[i] = Math.max(0, 1 - rgba[i * 4] / 254);
        }
        data.width = img.width
        data.height = img.height
        const n = img.width * img.height / 40;
        // console.log('in data and n')
        this.setState({ data, n }, this.getDelaunayPoints)
      }
    }


    // Start watcher for every second
    this.interval = setInterval(() => {
      this.watcher();
    }, 5000);

    // one time function to customize the load time of first tile zoomIn
    // const { initialLoadTime } = this.props.componentConfig;
    // this.initialload = setTimeout(() => {
      // this.zoomIn();
    // }, initialLoadTime * 1000 + 10);
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
    let maxTiles = this.state.placements.length; //this.props.photosGrid.length;
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

  // layTiles() {
  //   return _.map(this.props.photosGrid, (photoGrid, i) => {
  //     return (
  //       <div onClick={this.zoomIn.bind(this, i)} key={i}>
  //         <Tile
  //           photoGrid={photoGrid}
  //           caption={this.state.caption}
  //           show={this.state.show}
  //           zoomIn={this.state.zoomedInTile === i}
  //           zoomOut={this.state.zoomedOutTile === i}
  //           width={this.props.cardWidth}
  //           height={this.props.cardHeight}
  //         ></Tile>
  //       </div>
  //     );
  //   });
  // }
  callYTillValidXpoints = (arr, y) => {
    if (y) {
      return y;
    }
    let rand = getRandomInt(0, this.state.divPoints.length - 1);
    if (this.state.divPoints[rand].length > 1) {
      return this.callYTillValidXpoints(arr, rand)
    } else {
      return this.callYTillValidXpoints(arr)
    }
  }

  chooseRandomTile = () => {
    if (this.state.placements) {
      let randomString = this.state.placements[getRandomInt(0, this.state.placements.length - 1)];
      this.setState({ randomString })
      return;
    }
    return;
  }

  calculateLogoPercentage = () => {
    if (this.props.percent) {
      let pointsLength = this.state.divPoints.length;
      let length = Math.round(pointsLength * this.props.percent / 100);
      return length;

    }
    return this.state.divPoints.length;
  }

  processY = () => {
    // let divs = [];
    let buffer = this.props.tileSize;
    let placements = [];
    let randomString;
    // this.chooseRandomTile(buffer);
    // for (let i = 0; i < this.state.divPoints.length; i += buffer) { // buffer/4
    let length = this.calculateLogoPercentage();
    for (let i = 0; i < length; i += buffer) { // buffer/4
    // for (let i = 0; i < this.state.divPoints.length; i += buffer - 10) { //buffer/2
    // for (let i = 0; i < this.state.divPoints.length; i += buffer) {
      // for each y points
      // console.log('********************************', i, this.state.divPoints)
      let top = i;
      let currentX = this.state.divPoints[i][0];
      for (let j = 0, n=this.state.divPoints[i].length; j < n; j++) {
        let left = this.state.divPoints[i][j];
        if (left >= currentX) {
          currentX = left + buffer;
          let index = getRandomInt(0, this.props.photos.length-1)
    //       console.log('------------------index--------------', index)
    //       console.log('------------------photo url----------', this.props.photos[index])

          // console.log(this.state.xIndex === left)
          placements.push({top: left, left: i, index});
        }
      }
    }
    // if (!this.state.placements) {
      this.setState({placements})
    // }

    // return divs;
  }

  render() {
    // console.log('randomString', this.state.placements)
    return (
      <div className="logomossaic">
          {/* <div className='x'>{this.processX()}</div> */}
          {/* <div className='y'>{this.state.divPoints.length > 0 ? this.processY() : null}</div> */}
          {/* <div className='y'>{json.length > 0 ? this.processJson() : null}</div> */}
          {this.layTiles()}
        <div className="canvas" >
          {/* {this.state.caption} */}
          <canvas ref={node => this.canvas = node} style={{ display: 'none' }}  id="myCanvas">
            <img ref={node => this.image = node} alt='logo' src={this.props.logo} />
            Your browser does not support the HTML5 canvas tag.
          </canvas>
        </div>
        {/* {this.layTiles()} */}
      </div>
    );
  }
}

export default LogoMossaic;
