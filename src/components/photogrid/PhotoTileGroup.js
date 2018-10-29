import lodash from 'lodash';
import React, { Component } from 'react';

import PhotoTile from "./PhotoTile.js";

class PhotoTileGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.flip = this.flip.bind(this);
  }

  flip() {
    let photoCount = lodash.size(this.props.photos);
    let nextIndex = (this.state.currentIndex + 1) % photoCount;

    this.setState({currentIndex: nextIndex});
  }

  componentWillReceiveProps(nextProps) {
    if(lodash.isUndefined(nextProps.photos[this.state.currentIndex])) {
      this.setState({currentIndex: 0});
    }
  }

  render() {
    if(lodash.isEmpty(this.props.photos)) {
      return false;
    }

    let photo = this.props.photos[this.state.currentIndex];

    return <PhotoTile
      objectFit={this.props.objectFit}
      onError={this.props.onError}
      {...photo}/>;
  }
}

export default PhotoTileGroup;
