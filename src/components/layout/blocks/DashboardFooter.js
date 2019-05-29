import classNames from 'classnames';
import React, { Component } from 'react';

class DashboardFooter extends Component {
  render() {
    let url = this.props.url;

    return (
      <div className="dashboard-footer">
        <div className={classNames("logo", this.props.direction)}>
          { url ? <img src={url} alt="Fankave"/> : false }
        </div>
        <div className={classNames("logo", "left-2")}>
        </div>
      </div>
    );
  }
}

DashboardFooter.defaultProps = {
  direction: "right"
};

export default DashboardFooter;
