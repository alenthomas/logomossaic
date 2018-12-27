import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import {watchPhotos} from './../../../Services.js';
import TileComponent from '../tile/TileComponent.js';

import './PhotoGridTile.css';
import { handleError, getQueryString } from '../../../Helper.js';
import { timeoutCollection } from 'time-events-manager'

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photosCol1: [],
      photosCol2: []
    };
  }

  componentWillMount() {
    let {photogridtile: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchPhotos(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    this.props.markReady({'PhotoGridTile': false});
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {photogridtile: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchPhotos(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  divideImagesToColumns(photos) {
    let {col1, col2} = lodash.reduce(photos, (acc, p, i) => {
      (i%2 === 0) ? acc.col1.push(p) : acc.col2.push(p);
      return acc;
    }, {col1: [], col2: []});
    this.setState({
      photosCol1: lodash.concat(this.state.photosCol1, col1),
      photosCol2: lodash.concat(this.state.photosCol2, col2)
    });
  }

  loadData = (json) => {
    if(this.state.photosCol1.length < 50) {
      this.divideImagesToColumns(lodash.take(json, 10));
      this.props.markReady({'PhotoGridTile': true});
    }
  }

  renderColumn(data) {
    return (
      <div className="photos">
        {lodash.map(data, (photo, idx) => {
          return <img src={photo.url} key={`${photo.id}-${idx}`} alt="" />
        })}
      </div>
    )
  }

  render() {
    const { photosCol1, photosCol2 } = this.state;
    const { photogridtile: componentConfig } = this.props.config;

    if(!photosCol1) {
      return
    }

    return (
      <TileComponent className="photogridtile" heading={componentConfig.title}>
        {this.renderColumn(photosCol1)}
        {this.renderColumn(photosCol2)}
      </TileComponent>
    )
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    photogridtile: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}
export default IndexComponent;