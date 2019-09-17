import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalCarousel from './VerticalCarousel.js';
import RegularLayout from "./../layout/Regular.js";
import { pollFeatured, pollFeaturedSprinklr } from '../../Services.js';
import { queryString, handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

import './VerticalCarousel.css';
import Feed from '../../dataservices/Feed.js';

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    let objParam = getQueryString(this.props.location.search);

    this.DISPLAY_VERT_SIZE = objParam.vert;
    this.DISPLAY_HOR_SIZE = objParam.hor;

    this.state = {
      feed: new Feed()
    }
  }

  componentWillMount() {
    let { verticalcarousel: {refreshrate} } = this.props.config;
    let params = getQueryString(this.props.location.search);
    if(params.topicId) {
      pollFeaturedSprinklr(this.loadData, handleError, params.topicId);
    } else {
      pollFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let { verticalcarousel: {refreshrate} } = this.props.config;
      let params = getQueryString(this.props.location.search);
      if(params.topicId) {
        pollFeaturedSprinklr(this.loadData, handleError, params.topicId);
      } else {
        pollFeatured(this.loadData, handleError, params.ctag, params.filter, refreshrate);
      }
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
    const { verticalcarousel: componentConfig } = this.props.config;
    let type = queryString().type;
    return (
      <RegularLayout
        isReady={this.isReady()}
        config={this.props.config}
        title={componentConfig.title}
        className="vertical-carousel-container"
        hideBgWave={componentConfig.hideBgWave}
        vert={this.DISPLAY_VERT_SIZE}
        hor={this.DISPLAY_HOR_SIZE}
      >

        <div className="dashboard-content">
          <VerticalCarousel key={this.state.feed.getAll().count} feed={this.state.feed} type={type} componentConfig={componentConfig}/>
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
    verticalcarousel: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default IndexComponent;
