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
    this.setState({width: window.screen.width, height: window.screen.height})
  }
  content() {
    const { loadingMedia: { url, urlVertical, urlVertical320, urlVertical640, urlVertical1152, urlVertical1920 }, onLoadingVidEnded } = this.props;
    if(this.state.width === 320 && urlVertical320) {
      return (<VideoComponent onEnded={onLoadingVidEnded} src={urlVertical320} type='video/mp4' />)
    }
    if(this.state.width === 640 && urlVertical640) {
      return (<VideoComponent onEnded={onLoadingVidEnded} src={urlVertical640} type='video/mp4' />)
    }
    if (this.state.height === 1152 && urlVertical1152) {
      return (<VideoComponent onEnded={onLoadingVidEnded} src={urlVertical1152} type='video/mp4' />)
    }
    if (this.state.height === 1920 && urlVertical1920) {
      return (<VideoComponent onEnded={onLoadingVidEnded} src={urlVertical1920} type='video/mp4' />)
    }
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
