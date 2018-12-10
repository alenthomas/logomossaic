import lodash from 'lodash';
import React, { Component } from 'react';

import { getGroupBy, handleError } from '../../Helper.js'
import { watchVolume } from '../../Services.js';

import VolumeOfConversationChart from "./VolumeOfConversationChart.js";
import RegularLayout from "./../layout/Regular.js";

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
    watchVolume(this.loadData, handleError);
  }

  componentWillReceiveProps() {
    watchVolume(this.loadData, handleError);
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

export default IndexComponent;
