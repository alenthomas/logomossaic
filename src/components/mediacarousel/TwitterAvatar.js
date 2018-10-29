import React, { Component } from 'react';
import lodash from 'lodash';

export default class TwitterAvatar extends Component {
  render() {
    let { image } = this.props;
    image = lodash.replace(image, "_normal", "");

    return <div className="avatar">
      <object className="image-obj" data={image} type="image/png">
        <img src="/assets/default.jpg" alt="Tweeter"/>
      </object>
    </div>
  }
}
