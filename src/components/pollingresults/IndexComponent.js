import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import Results from './Results.js';
import RegularLayout from "./../layout/Regular.js";

import { getResults } from '../../Services.js'
import './pollingresults.css';
import { getQueryString, handleError } from '../../Helper.js';
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
    getResults(params.ctag, this.loadData, handleError);
  }

  loadData = (feed) => {
    if(feed.data) {
      this.setState({feed: feed.data});
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
       getResults(params.ctag, this.loadData, handleError);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
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