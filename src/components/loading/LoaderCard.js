import classNames from 'classnames';
import React, {Component} from 'react';
import {VideoComponent} from '../layout/blocks/VideoComponent';

import './Loading.css';

class LoaderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0, height: 0};
  }
  componentDidMount() {
    this.setState({width: window.screen.width * window.devicePixelRatio, height: window.screen.height * window.devicePixelRatio})
  }
  content() {
    const { loadingMedia: { url, urlVertical }, onLoadingVidEnded } = this.props;
    if(this.state.height > this.state.width) {
      return (
        <VideoComponent onEnded={onLoadingVidEnded} src={urlVertical} type='video/mp4' />
      )
    }
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
