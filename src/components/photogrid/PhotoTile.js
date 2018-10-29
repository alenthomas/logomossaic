import lodash from 'lodash';
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import { queryString } from '../../Helper.js';

export const LANDSCAPE_RATIO = "2:1";

export const MAX_HEIGHT = "250px";
export const MAX_LANDSCAPE_WIDTH = "500px";
export const MAX_POTRAIT_WIDTH ="240px";

class PhotoTile extends Component {
  content(photo) {
    let width = photo.isLandscape ? MAX_LANDSCAPE_WIDTH : MAX_POTRAIT_WIDTH;

    let {style: objectFit} = queryString({style: this.props.objectFit});

    let computedStyle = {
      height: MAX_HEIGHT,
      width: width,
      objectFit: objectFit
    };

    return (
      <img
        className="photo-tile"
        src={photo.url}
        key={photo.id}
        onError={() => photo.onError(photo.id)}
        alt={`Tweet pic ${photo.id}`}
        style={computedStyle}/>
    );
  }

  render() {
    let photo = this.props;
    let rotateFn = lodash.sample(["rotateY", "rotateX"]);

    return (
      <CSSTransitionGroup
        transitionName={`photo-tile-${rotateFn}`}
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={1}
        transitionLeaveTimeout={1}>
        {this.content(photo)}
      </CSSTransitionGroup>
    );
  }
}

PhotoTile.defaultProps = {
  objectFit: "fill"
};

export default PhotoTile;
