import React, { Component } from "react";
import classnames from 'classnames';

export default class TileComponent extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, 'tile')}>
        <div className="heading">{this.props.heading}</div>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
