import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import ThreeColumnLayout from '../../components/layout/ThreeColumn.js';
import LeaderboardTile from './leaderboardtile/IndexComponent.js'
import PhotoGridTile from './photogridtile/IndexComponent.js'
import MediaCarouselTile from './mediacarouseltile/IndexComponent.js'

import './GridView.css'

class GridView extends Component {
  constructor(props) {
    super(props)

    this.state = { isReady: {} }
  }

  markReady = (readyness) => {
    let { state } = this;
    state.isReady = lodash.merge(state.isReady, readyness);
    this.setState(state);
  }

  isReady() {
    return lodash(this.state.isReady).values().every();
  }

  render() {
    const { config } = this.props;

    return (
      <ThreeColumnLayout isReady={this.isReady()} config={config}>
          <div className="row">
            <div className="col-sm-12 col-md-4 left-column" style={{height: '85vh'}}>
              <PhotoGridTile markReady={this.markReady} {...this.props} />
            </div>
            <div className="col-sm-12 col-md-4 center-column">
              <MediaCarouselTile markReady={this.markReady} {...this.props} />
            </div>
            <div className="col-sm-12 col-md-4 right-column" style={{height: '85vh'}}>
              <LeaderboardTile markReady={this.markReady} {...this.props} />
            </div>
          </div>
       </ThreeColumnLayout>
    );
  }
}

GridView.propTypes = {
  config: PropTypes.shape({
    photogridtile: PropTypes.object.isRequired,
    mediacarouseltile: PropTypes.object.isRequired,
    leaderboardtile: PropTypes.object.isRequired,
  }).isRequired
}

export default GridView;
