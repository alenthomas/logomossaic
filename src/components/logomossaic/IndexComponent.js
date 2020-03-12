import _ from 'lodash';
import React, { Component } from 'react';
// import classNames from 'classnames';

// import { handleError, getQueryString } from '../../Helper.js';
import { handleError, getQueryString } from '../../Helper.js';
// import PhotoWall from './PhotoWall.js';
import LogoMossaic from './LogoMossaic.js';
import RegularLayout from './../layout/Regular.js';
import { getLatestPhotos } from '../../Services.js';
// import { TILE_SIZE } from './Tile.js';
import { timeoutCollection } from 'time-events-manager';

import './logomossaic.css';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    let objParam = getQueryString(this.props.location.search);

    this.TILE_SIZE = parseInt(objParam.tile, 10) || 10;
    this.LOGO_PERCENTAGE = parseInt(objParam.percentage, 10) || 50;

    this.state = {
      photos: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.initCanvas();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      this.initCanvas();
    }
  }

  initCanvas() {
    this.loadPhotos()
  }


  loadPhotos() {
    let params = getQueryString(this.props.location.search);
    getLatestPhotos(
      params.ctag,
      params.filter,
      '',
      photos => {
        // let grid = generateGrid(photos, WIDTH, HEIGHT);
        // this.setState({ photosGrid: grid });
        this.setState({photos})
      },
      handleError
    );
  }

  render() {
    const { logomossaic: componentConfig } = this.props.config;
    const params = getQueryString(this.props.location.search);
    const data = this.state.photos;
    if (_.isEmpty(data)) {
      return false;
    }

    return (
      <RegularLayout
        isReady={!_.isEmpty(data)}
        config={this.props.config}
        className="logomossaic-container"
        title={componentConfig && componentConfig.title}
        hideBgWave={componentConfig && componentConfig.hideBgWave}
      >
        <LogoMossaic
          photos={data}
          componentConfig={componentConfig}
          logo={params.logo || componentConfig.logo}
          logo_rev={componentConfig['logo-rev']}
          tileSize={this.TILE_SIZE}
          percent={this.LOGO_PERCENTAGE}
        />
        <div className='percentage'>
          <div>{`Percentage : ${this.LOGO_PERCENTAGE}%  `}
            <a href="https://twitter.com/intent/tweet?text=%23CiscoLiveAPJC" target="_blank" rel="noopener noreferrer">
              Tweet #CiscoLiveAPJC
            </a>
          </div>
        </div>
      </RegularLayout>
    );
  }
}

export default IndexComponent;
