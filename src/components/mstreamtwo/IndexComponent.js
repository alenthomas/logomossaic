import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchSocial } from '../../Services.js'
import { hasVideoMedia } from './../mediacarousel/helpers';

import MasonaryStreamV3 from './MstreamTwo.js';
import BrokenMediaRemover from './../mediacarousel/BrokenMediaRemover.js'
import RegularLayout from "./../layout/Regular.js";

import './../mediacarousel/MediaCarousel.css';
import './mstream.css';
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
    // console.log('MSTREAM INDEX api call successful');
    let filtered = data.filter((d) => d.source.name === 'Twitter' || d.source.name === 'Instagram');
    lodash.remove(data, hasVideoMedia);
    let dataEqual = lodash.isEqual(lodash.sortBy(filtered), lodash.sortBy(this.state.data));
    if(!dataEqual) {
      // console.log('MSTREAM INDEX api new data');
      this.setState({data: filtered});
      return;
    }
    // console.log('MSTREAM INDEX api no new data');
    return;
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
        hideBgWave={true}
        className="masonary-stream-v2">
          <div className="dashboard-content-v2">
            <BrokenMediaRemover data={data}>
              <MasonaryStreamV3 />
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
