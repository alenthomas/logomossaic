import lodash from 'lodash';
import React, { Component } from 'react';

import {generateGrid} from '../../Helper.js';
import PhotoWall from "./PhotoWall.js";
import RegularLayout from "./../layout/Regular.js";
import {getPhotos} from '../../Services.js';
import {TILE_SIZE} from './Tile.js';

import './photo-wall.css';


class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photosGrid: []
    };
  }

  componentWillMount() {
    getPhotos((photos) => {
      let grid = generateGrid(photos, TILE_SIZE.DEFAULT.WIDTH, TILE_SIZE.DEFAULT.HEIGHT);
      this.setState({photosGrid: grid});
    });
  }

  render() {
    const { photowall: componentConfig } = this.props.config;
    const data = this.state.photosGrid;
    if(lodash.isEmpty(data)) { return false }

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="photo-wall-container"
        title={componentConfig && componentConfig.title}
        hideBgWave={componentConfig && componentConfig.hideBgWave}>
          <PhotoWall photosGrid={data} componentConfig={componentConfig}/>
      </RegularLayout>
    )
  }
}

export default IndexComponent;
