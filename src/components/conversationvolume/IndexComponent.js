import lodash from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getGroupBy, handleError, getQueryString } from '../../Helper.js'
import { watchVolume } from '../../Services.js';

import VolumeOfConversationChart from "./VolumeOfConversationChart.js";
import RegularLayout from "./../layout/Regular.js";
import { timeoutCollection } from 'time-events-manager';

import './VolumeOfConversation.css';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volumeOfConversation: {}
    };
  }

  loadData = (volume) => {
    let state = {volumeOfConversation: {}};
    const groupBy = getGroupBy();

    state.volumeOfConversation[groupBy] = volume;
    this.setState(state);
  }

  componentWillMount() {
    let { conversationvolume: { refreshrate }} = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchVolume(this.loadData, handleError, params.ctag, params.filter, refreshrate);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let { conversationvolume: { refreshrate }} = this.props.config;
      let params = getQueryString(this.props.location.search);
      watchVolume(this.loadData, handleError, params.ctag, params.filter, refreshrate);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  render() {
    const { conversationvolume: componentConfig } = this.props.config;
    const groupBy = getGroupBy();
    const data = this.state.volumeOfConversation[groupBy];
    const title = componentConfig.title[groupBy];

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="volume"
        title={title}
        hideBgWave={componentConfig.hideBgWave}>
        <div className="dashboard-content">
          <VolumeOfConversationChart data={data} groupBy={getGroupBy()} />
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
    conversationvolume: PropTypes.shape({
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

export default IndexComponent;
