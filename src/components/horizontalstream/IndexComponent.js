import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchSocial } from "../../Services.js";
import { hasVideoMedia } from './../mediacarousel/helpers';

import HorizontalStream from './HorizontalStream.js';
import BrokenMediaRemover from './../mediacarousel/BrokenMediaRemover.js'
import RegularLayout from "./../layout/Regular.js";

import './../mediacarousel/MediaCarousel.css';
import './HorizontalStream.css';
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

  UNSAFE_componentWillMount() {
    let {horizontalstream: {refreshrate}} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchSocial(this.loadData, handleError, params.ctag, params.filter, null, refreshrate); // null is for api limit default
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let {horizontalstream: {refreshrate}} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchSocial(this.loadData, handleError, params.ctag, params.filter, null, refreshrate); // null is for api limit default
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  render() {
    const data = this.state.data;
    const { horizontalstream: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="horizontal-stream">
          <BrokenMediaRemover data={data}>
            <HorizontalStream/>
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
    horizontalstream: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}

export default IndexComponent;
