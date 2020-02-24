
// libs
import React, { Component } from 'react';
import lodash from 'lodash';
import PropTypes from 'prop-types';

// src
import SocialCluster from './SocialCluster'
import { getPhotos } from '../../Services.js'
import RegularLayout from "./../layout/Regular.js";
import { handleError, getQueryString } from '../../Helper.js';
import './cluster.css';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
      };
  }

  UNSAFE_componentWillMount() {
    const params = getQueryString(this.props.location.search);
    getPhotos(params.ctag, params.filter, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
   
  }

  componentWillUnmount() {
  }

  loadData = (data) => {
    this.setState(() => ({data}));
  }

  render() {
    const {data} = this.state;
    const { socialCluster: componentConfig = {} } = this.props.config;
    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="social-cluster"
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}
      >
          <SocialCluster
            data={data}
          />
      </RegularLayout>
    );
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    trendingdiscussion: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default IndexComponent;
