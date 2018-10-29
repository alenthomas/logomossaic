import React, {Component} from 'react';

import './Capsule.css';

import {API_CONFIG} from "../../Services.js";

const CAPSULE_URL = API_CONFIG.CAPSULE_URL;

class IndexComponent extends Component {
  render() {
    return (
      <div className="dashboard capsule">
        <video
          ref="capsuleAnimation"
          className="capsule-animation"
          src={CAPSULE_URL}
          autoPlay={true}
          muted={true}
          loop={true}/>
      </div>
    );
  }
}

export default IndexComponent;
