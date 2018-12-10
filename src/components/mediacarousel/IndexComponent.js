import React, { Component } from 'react';
import Carousel from './Carousel.js';
import RegularLayout from "./../layout/Regular.js";
import { pollFeatured } from '../../Services.js';
import { queryString, handleError } from '../../Helper.js';

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
    pollFeatured(this.loadData.bind(this), handleError);
  }

  loadData(feed) {
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
          <Carousel key={this.state.feed.getAll().count} feed={this.state.feed} type={type}/>
        </div>

      </RegularLayout>
    )
  }
}

export default IndexComponent;
