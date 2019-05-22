import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPhotos } from '../../Services.js';
import Polling from './Polling.js';

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
    getPhotos(params.ctag, params.filter, this.loadData, handleError, false);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      getPhotos(params.ctag, params.filter, this.loadData, handleError, false);
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
    return (
      <Polling feed={this.state.feed}/>
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