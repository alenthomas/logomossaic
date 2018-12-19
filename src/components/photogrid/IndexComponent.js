import lodash from 'lodash';
import React, { Component } from 'react';
import { handleError, getQs } from '../../Helper';

import PhotoGrid from "./PhotoGrid.js";
import RegularLayout from "./../layout/Regular.js";

import './PhotoGrid.css';

import { watchPhotos } from '../../Services.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photogrid: []
    };
  }

  componentWillMount() {
    let params = getQs(this.props.location.search);
    watchPhotos(params, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQs(this.props.location.search);
      watchPhotos(params, this.loadData, handleError);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (photos) => {
    this.setState({photogrid: photos})
  }


  render() {
    const data = this.state.photogrid;
    if(lodash.isEmpty(data)) { return false }

    const { photogrid: componentConfig } = this.props.config;

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="photo-grid"
        title={componentConfig.title}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="dashboard-content">
          <PhotoGrid data={data} objectFit={this.props.objectFit}/>
        </div>
      </RegularLayout>
    )
  }
}

export default IndexComponent;
