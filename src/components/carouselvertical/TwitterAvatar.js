import React, { Component } from 'react';
import lodash from 'lodash';
const defaultImg = "/assets/default.jpg";

export default class TwitterAvatar extends Component {
  render() {
    let { image } = this.props;
    image = lodash.replace(image, "_normal", "");
    return (
      <div className="avatar">
        <object className="image-obj" data={image || defaultImg} type="image/png">
          <img src={defaultImg} alt="Tweeter"/>
        </object>
      </div>
    )
  }
}
