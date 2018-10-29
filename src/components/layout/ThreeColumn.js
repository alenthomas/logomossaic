import classNames from 'classnames';
import React, { Component } from 'react';

import LoaderCard from "../loading/LoaderCard.js";

import './ThreeColumn.css';

class RioLayout extends Component {
  constructor(props) {
    super(props);

    const { loadingMedia } = props.config;

    this.state = {
      isReady: false,
      loadingMedia: {
        ...loadingMedia,
        url: `${loadingMedia.url()}`
      }
    };

    this.onLoadingVidEnded = this.onLoadingVidEnded.bind(this);
  }

  onLoadingVidEnded() {
    this.setState({isReady: true});
  }

  header() {
    const { header } = this.props.config.layout.threecolumn;

    if(this.state.isReady && this.props.isReady) {
      return <div className="header">
        <img className="logo nba-logo" alt="" src={header.leftLogoUrl} />
        <div className="dashboard-title">
          {this.props.title}
        </div>
        <img className="logo cisco-logo" alt="" src={header.rightLogoUrl} />
      </div>
    }
  }

  render() {
    const { loadingMedia } = this.state;
    const { config } = this.props;
    const { footer } = config.layout.threecolumn;

    return (
      <div className={classNames("threecolumnlayout", "dashboard", config.containerCssClassname)}
           style={{background: config.background}}
           id={this.props.id}>

        <LoaderCard isReady={this.state.isReady && this.props.isReady} loadingMedia={loadingMedia} onLoadingVidEnded={this.onLoadingVidEnded} />;

        {this.header()}

        {this.props.children}

        <div className="powered-by">
          <img src={footer.logoUrl} alt=''/>
        </div>
      </div>
    )
  }
}

export default RioLayout;
