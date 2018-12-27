import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel.js';
import RegularLayout from "./../layout/Regular.js";
import { pollFeatured } from '../../Services.js';
import { queryString, handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

import './MediaCarousel.css';
import Feed from '../../dataservices/Feed.js';

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    let { mediacarousel: {refreshrate} } = this.props.config;
    let params = getQueryString(this.props.location.search);
    pollFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let { mediacarousel: {refreshrate} } = this.props.config;
      let params = getQueryString(this.props.location.search);
      pollFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (feed) => {
    this.setState({feed: feed})
  }

  isReady() {
    return !this.state.feed.isEmpty()
  }

  render() {
    const { mediacarousel: componentConfig } = this.props.config;
    let type = queryString().type;
    return (
      <RegularLayout
        isReady={this.isReady()}
        config={this.props.config}
        title={componentConfig.title}
        className="carousel-container"
        hideBgWave={componentConfig.hideBgWave}>

        <div className="dashboard-content">
          <Carousel key={this.state.feed.getAll().count} feed={this.state.feed} type={type} componentConfig={componentConfig}/>
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
    mediacarousel: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default IndexComponent;
