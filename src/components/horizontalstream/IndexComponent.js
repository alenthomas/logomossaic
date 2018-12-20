import lodash from 'lodash';
import React, { Component } from 'react';

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

  componentWillMount() {
    let params = getQueryString(this.props.location.search);
    watchSocial(params.ctag, params.filter, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchSocial(params.ctag, params.filter, this.loadData, handleError);
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

export default IndexComponent;
