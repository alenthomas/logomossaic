import React, { Component } from 'react';

class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <div className="logo left-icon">
          { this.props.leftLogoUrl ?  <img src={this.props.leftLogoUrl} alt=""/> : false }
        </div>
        <div className="dashboard-title">
          {this.props.title}
        </div>
        <div className="dashboard-short-title">
          {this.props.shortTitle}
        </div>
        <div className="logo right-icon">
          { this.props.rightLogoUrl ? <img src={this.props.rightLogoUrl} alt=""/> : false }
        </div>
      </div>
    );
  }
}

export default DashboardHeader;
