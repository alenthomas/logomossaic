import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleError, getQueryString } from '../../Helper';

import PhotoGrid from "./PhotoGrid.js";
import RegularLayout from "./../layout/Regular.js";

import './PhotoGrid.css';

import { watchPhotos } from '../../Services.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photogrid: []
    };
  }

  UNSAFE_componentWillMount() {
    let {photogrid: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchPhotos(this.loadData, handleError, params.ctag, params.filter, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {photogrid: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchPhotos(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (photos) => {
    this.setState({photogrid: photos})
  }


  render() {
    const data = this.state.photogrid;
    if(lodash.isEmpty(data)) { return false }

    const { photogrid: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="photo-grid"
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="dashboard-content">
          <PhotoGrid data={data} objectFit={this.props.objectFit}/>
        </div>
      </RegularLayout>
    )
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    photogrid: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  objectFit: PropTypes.string,
}

export default IndexComponent;
