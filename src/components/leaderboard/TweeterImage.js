import lodash from 'lodash';
import classNames from 'classnames';
import React, {Component} from 'react';

class TweeterImage extends Component {
  render() {
    let image = lodash.replace(this.props.image[0], "_normal", "");

    return (
      <div className={classNames("tweeter-image", this.props.className)}>
        <object className="image-obj" data={image} type="image/png">
          <img src="/assets/default.jpg" alt="Tweeter"/>
        </object>
      </div>
    );
  }
}

export default TweeterImage;
