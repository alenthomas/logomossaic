import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchSocial } from '../../Services.js'
import { hasVideoMedia } from './../mediacarousel/helpers';

import MasonaryStream from './MasonaryStream.js';
import BrokenMediaRemover from './../mediacarousel/BrokenMediaRemover.js'
import RegularLayout from "./../layout/Regular.js";

import './../mediacarousel/MediaCarousel.css';
import './MasonaryStream.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  loadData = (data) => {
    let filtered = data.filter((d) => d.source.name === 'Twitter' || d.source.name === 'Instagram');
    lodash.remove(data, hasVideoMedia);
    this.setState({data: filtered});
  }

  componentWillMount() {
    let {masonarystream: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchSocial(this.loadData, handleError, params.ctag, params.filter, null, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {masonarystream: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchSocial(this.loadData, handleError, params.ctag, params.filter, null, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  render() {
    const data = this.state.data;
    const { masonarystream: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}
        className="masonary-stream">
          <div className="dashboard-content">
            <BrokenMediaRemover data={data}>
              <MasonaryStream />
            </BrokenMediaRemover>
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
    masonarystream: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}

export default IndexComponent;
