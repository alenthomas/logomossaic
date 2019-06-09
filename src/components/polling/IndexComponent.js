import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import { getPhotosPoll } from '../../Services.js';
import Polling from './Polling.js';
import RegularLayout from "./../layout/Regular.js";

import './polling.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';


class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    }
  }

  componentWillMount() {
    let params = getQueryString(this.props.location.search);
    let { polling: {refreshrate} } = this.props.config;
    getPhotosPoll(params.ctag, params.filter, this.loadData, handleError, refreshrate, false);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      let { polling: {refreshrate} } = this.props.config;
      getPhotosPoll(params.ctag, params.filter, this.loadData, handleError, refreshrate, false);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (feed) => {
    this.setState({feed: feed})
  }

  isReady() {
    return !this.state.feed.length > 0;
  }

  render() {
     const { polling: componentConfig } = this.props.config;
    return (
      <RegularLayout
        isReady={!lodash.isEmpty(this.state.feed)}
        config={this.props.config}
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}
        className="polling vision-player">
          <Polling feed={this.state.feed}/>
      </RegularLayout>
    )
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  config: PropTypes.shape({
    ticker: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}

export default IndexComponent;