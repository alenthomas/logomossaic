import React, { Component } from 'react';
import classNames from 'classnames';

class StatItem extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this.showWithDelay();
  }

  componentWillReceiveProps(nextProps) {
    this.showWithDelay();
  }

  showWithDelay() {
    this.shower = setTimeout(() => {
      this.setState({show: true})
      this.hideLater()
    }, this.props.showAfter);
  }

  componentWillUnmount() {
    clearTimeout(this.shower);
    clearTimeout(this.hider);
  }

  hideLater() {
    this.hider = setTimeout(() => {
      this.setState({show: false})
    }, this.props.hideAfter);
  }

  render() {
    let {stat, arcPercent} = this.props;
    let {show} = this.state;
    let arcStyle = { strokeDasharray: show ? `${arcPercent*950} 1100` : '0 1100' }
    return (
      <div className={classNames("box", {"show": show})}>
        <div className="circle">
          <div className="icon" style={{backgroundImage: `url(${stat.icon})`}}></div>
          <div className="count">{stat.count}</div>
          <div className="label">{stat.label}</div>
        </div>
        <svg>
          <circle cx="50%" cy="50%" r="175" style={arcStyle}></circle>
        </svg>
        
      </div>
    )
  }

}

export default StatItem;