import classNames from 'classnames';
import React, {Component} from 'react';
import {VideoComponent} from '../layout/blocks/VideoComponent';

import './Loading.css';

class LoaderCard extends Component {
  content() {
    const { loadingMedia: { url }, onLoadingVidEnded } = this.props;
    return (
      <VideoComponent onEnded={onLoadingVidEnded} src={url} type='video/mp4' />
    )
  }

  render() {
    return (
      <div className={classNames("loader-card-container", {fadeOut: this.props.isReady})}>
        <div className="loader-card-holder">
          {this.content()}
        </div>
      </div>
    );
  }
}

export default LoaderCard;
