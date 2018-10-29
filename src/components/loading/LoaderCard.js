import classNames from 'classnames';
import React, {Component} from 'react';

import './Loading.css';

class LoaderCard extends Component {
  content() {
    const { loadingMedia: { url }, onLoadingVidEnded } = this.props;

    return <video autoPlay muted className="loader-card" onEnded={onLoadingVidEnded}>
      <source src={url} type="video/mp4" />
    </video>
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
