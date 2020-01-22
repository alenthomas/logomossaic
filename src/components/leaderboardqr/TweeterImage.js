import classNames from 'classnames';
import React, {Component} from 'react';

class TweeterImage extends Component {
  render() {
    return (
      <div className={classNames("tweeter-image", this.props.className)}>
        <object className="image-obj" data={"/assets/defCircle.png"} type="image/png">
          <img src="/assets/defaultCircle.png" alt="Tweeter"/>
        </object>
      </div>
    );
  }
}

export default TweeterImage;
