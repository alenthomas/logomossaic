import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import Results from './Results.js';
import RegularLayout from "./../layout/Regular.js";

import './pollingresults.css';
import { getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

let URL = 'http://devapi.fankave.com/ids'


class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    }
  }

  componentWillMount() {
    let params = getQueryString(this.props.location.search);
    this.getResults(params.ctag);
    // getPhotos(params.ctag, params.filter, this.loadData, handleError, false);
  }

  getResults = (ctag) => {
    fetch(`${URL}/polling/getContest?contest=${ctag}`)
    .then(res => res.json())
    .then(result => {
      if(result.data) {
        this.setState({feed: result.data});
      }
    })
    .catch(err => {
      console.error('Error fetching poll results: ', err);
      this.setTimeout(() => this.getResults(ctag), 5000);
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      this.getResults(params.ctag);
      // getPhotos(params.ctag, params.filter, this.loadData, handleError, false);
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
     const { pollingresults: componentConfig } = this.props.config;
    return (
      <RegularLayout
        isReady={!lodash.isEmpty(this.state.feed)}
        config={this.props.config}
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}
        className="polling-results vision-player">
          <Results feed={this.state.feed.slice(0, 6)} />
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