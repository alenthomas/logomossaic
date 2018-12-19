import React, { Component } from 'react';
import lodash from 'lodash';
import {watchLeaderboardInfo} from './../../../Services.js';

import './LeaderboardTile.css';

import LeaderRow from './LeaderRow.js';
import TileComponent from '../tile/TileComponent.js';
import { handleError, getQueryString } from '../../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: []
    };
  }

  componentWillMount() {
    let params = getQueryString(this.props.location.search);
    watchLeaderboardInfo(params.ctag, params.filter, this.loadData, handleError)
    this.props.markReady({'LeaderboardTile': false});
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchLeaderboardInfo(params.ctag, params.filter, this.loadData, handleError);
    }
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
  }

  loadData = (json) => {
    this.setState({leaders: json})
    this.props.markReady({'LeaderboardTile': true});
  }

  render() {
    const leaders = lodash(this.state.leaders).sortBy(["count", "name"]).reverse().value();
    const { leaderboardtile: componentConfig } = this.props.config;

    return (
      <TileComponent className="leaderboard" heading={componentConfig.title}>
        <div className="contents">
          {lodash.map(leaders, (leader, index) => {
            return <LeaderRow key={leader.handle} leader={leader} rank={index+1}/>;
          })}
        </div>
      </TileComponent>
    )
  }
}

export default IndexComponent;
