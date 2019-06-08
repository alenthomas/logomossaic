import classNames from 'classnames';
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import BackgroundWave from "../layout/blocks/BackgroundWave.js";
import DashboardHeader from "../layout/blocks/DashboardHeader.js";
import DashboardFooter from "../layout/blocks/DashboardFooter.js";
import LoaderCard from "../loading/LoaderCard.js";

import './Regular.css';

class Regular extends Component {
  constructor(props) {
    super(props);

    const { loadingMedia } = props.config;
    const urlVertical = this.getVerticalMediaUrl(loadingMedia);
    const urlVertical320 = this.getVerticalMediaUrl(loadingMedia, 320);
    const urlVertical640 = this.getVerticalMediaUrl(loadingMedia, 640);
    this.state = {
      isReady: false,
      loadingMedia: {
        ...loadingMedia,
        url: `${loadingMedia.url()}`,
        urlVertical,
        urlVertical320,
        urlVertical640,
      }
    };

    this.onLoadingVidEnded = this.onLoadingVidEnded.bind(this);
  }

  getVerticalMediaUrl(media, resolution=null) {
    try {
      if(resolution === 320) {
        return `${media.urlVertical320()}`
      }
      if(resolution === 640) {
        return `${media.urlVertical640()}`
      }
      return `${media.urlVertical()}`
    } catch (err) {
      console.error('no vertical media url in config');
      return `${media.url()}`
    }
  }

  onLoadingVidEnded() {
    this.setState({isReady: true});
  }

  isReady() {
    // return true;
    return this.props.isReady && this.state.isReady;
  }

  content() {
    const { loadingMedia } = this.state;
    const { config: {layout: {regular: layoutConfig}} } = this.props;

    if(!this.isReady()) {
      return <LoaderCard isReady={this.isReady()} loadingMedia={loadingMedia} onLoadingVidEnded={this.onLoadingVidEnded} />;
    }

    return (
      <CSSTransitionGroup
        transitionName="content-transition"
        transitionAppear={true}
        transitionAppearTimeout={4000}
        transitionEnterTimeout={1}
        transitionLeaveTimeout={1}>
        <div>
          <DashboardHeader
            leftLogoUrl={layoutConfig.header.leftLogoUrl}
            rightLogoUrl={layoutConfig.header.rightLogoUrl}
            title={this.props.title}
            shortTitle={this.props.shortTitle} />
          {this.backgroundWave()}
          {this.props.children}
          <DashboardFooter url={layoutConfig.footer.logoUrl} />
        </div>
      </CSSTransitionGroup>
    );
  }

  backgroundWave() {
    let {hideBgWave} = this.props;
    if(!hideBgWave) {
      return <BackgroundWave/>;
    }
  }

  render() {
    const { config } = this.props;

    return (
      <div className={classNames("regularlayout", "dashboard", config.containerCssClassname, this.props.className)}
           style={{background: config.background, backgroundSize: 'cover'}}
           id={this.props.id}>
        {this.content()}
      </div>
    );
  }
};

export default Regular;
