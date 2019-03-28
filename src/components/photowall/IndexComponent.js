import lodash from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames';

import {generateGrid, handleError, getQueryString} from '../../Helper.js';
import PhotoWall from "./PhotoWall.js";
import RegularLayout from "./../layout/Regular.js";
import {getLatestPhotos} from '../../Services.js';
import {TILE_SIZE} from './Tile.js';
import { timeoutCollection } from 'time-events-manager';

import './photo-wall.css';


class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photosGrid: [],
      topicsSelector: false,
      topics: {},
      currentTopic: ''
    };
  }

  componentWillMount() {
    this.initTopics();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      this.initTopics();
    }
  }

  initTopics() {
    let config = this.props.config;
    let topicId = '';
    if (config.sprinklrApi) {
      let topics = config.sprinklrApi.topics;
      topicId = lodash.values(config.sprinklrApi.topics)[0];
      this.setState({
        topics: topics,
        currentTopic: topicId
      });
    }
    this.loadPhotos(topicId);
  }

  setTopic(topicId) {
    this.setState({
      currentTopic: topicId,
      topicsSelector: false
    });
    this.loadPhotos(topicId);
    setTimeout(() => {
      this.setState({photosGrid: []});
    }, 1000);
  }

  loadPhotos(topicId) {
    let params = getQueryString(this.props.location.search);
    let topicToLoad = topicId || this.state.currentTopic;
    getLatestPhotos(params.ctag, params.filter, topicToLoad, (photos) => {
      let grid = generateGrid(photos, TILE_SIZE.DEFAULT.WIDTH, TILE_SIZE.DEFAULT.HEIGHT);
      this.setState({photosGrid: grid});
    }, handleError);
  }

  renderTopicsPicker() {
    let { topics } = this.state;
    if (!lodash.isEmpty(topics)) {
      return (
        <div className={classNames("topics-view", {show: this.state.topicsSelector})}>
          <div className="selector" onClick={this.toggleTopicsPicker.bind(this)}>
          </div>
          <div className="topics">
            {lodash.map(topics, (id, name) => {
              return <span key={id} onClick={() => this.setTopic(id)}>
                <div>{name}</div>
              </span>
            })}
          </div>
        </div>
      )
    }
  }

  toggleTopicsPicker() {
    this.setState({
      topicsSelector: !this.state.topicsSelector
    })
  }

  render() {
    const { photowall: componentConfig } = this.props.config;
    const data = this.state.photosGrid;
    if(lodash.isEmpty(data)) { return false }

    return (
      <RegularLayout
        isReady={!lodash.isEmpty(data)}
        config={this.props.config}
        className="photo-wall-container"
        title={componentConfig && componentConfig.title}
        hideBgWave={componentConfig && componentConfig.hideBgWave}>
          {this.renderTopicsPicker()}
          <PhotoWall photosGrid={data} componentConfig={componentConfig}/>
      </RegularLayout>
    )
  }
}

export default IndexComponent;
