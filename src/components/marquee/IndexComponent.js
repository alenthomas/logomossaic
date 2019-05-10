import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchSocial } from '../../Services.js'

import MarqueeStream from './Marquee.js';

import './Marquee.css';
import { handleError, getQueryString } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      fullscreen: false,
      asked: false,
    };
  }

  handleFullscreenChange = (e) => {
   let fullscreen = false
   if (document.fullscreenElement ||
     document.mozFullScreenElement||
     document.webkitFullscreenElement ||
     document.msFullscreenElement ||
     document.fullscreen ||
     document.mozFullScreen ||
     document.webkitIsFullScreene ||
     document.fullScreenMode ) {
     fullscreen = true
   }
   this.setState ({fullscreen, asked: true})
 }

 handleToggle = (e) => {
   const el = document.documentElement
   if(!this.state.fullscreen) {
     if (el.requestFullscreen) {
       el.requestFullscreen()
     } else if (el.mozRequestFullScreen) {
       el.mozRequestFullScreen()
     } else if (el.webkitRequestFullscreen) {
       el.webkitRequestFullscreen()
     } else if (el.msRequestFullscreen) {
       el.msRequestFullscreen()
     }
   } else {
     if (document.exitFullscreen) {
       document.exitFullscreen()
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen()
     } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen()
     } else if (document.msExitFullscreen) {
       document.msExitFullscreen()
     }
   }
 }

 cancel = (e) => {
   this.setState({asked: true});
 }

  loadData = (data) => {
    let filtered = data.filter((d) => d.source.name === 'Twitter');
    this.setState({data: filtered});
  }

  componentWillMount() {
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange, false)
   document.addEventListener('mozfullscreenchange', this.handleFullscreenChange, false)
   document.addEventListener('msfullscreenchange', this.handleFullscreenChange, false)
   document.addEventListener('MSFullscreenChange', this.handleFullscreenChange, false) //IE11
   document.addEventListener('fullscreenchange', this.handleFullscreenChange, false)
    let { marquee: {count, refreshrate} } = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchSocial(this.loadData, handleError, params.ctag, params.filter, count, refreshrate);
  }

  componentDidUpdate(prevProps) {
    let { marquee: {count, refreshrate} } = this.props.config;
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchSocial(this.loadData, handleError, params.ctag, params.filter, count, refreshrate);
    }
  }

  componentDidMount() {
    document.getElementById('root').style.background = "none";
  }

  componentWillUnmount() {
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange)
   document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange)
   document.removeEventListener('msfullscreenchange', this.handleFullscreenChange)
   document.removeEventListener('MSFullscreenChange', this.handleFullscreenChange)
   document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
    timeoutCollection.removeAll();
  }

  render() {
    let data = this.state.data;
    if(!this.state.fullscreen && !this.state.asked) {
      return (
        <div className="ask-fullscreen">
          <button onClick={this.handleToggle}>Toggle Full Screen</button>
          <button onClick={this.cancel}>No full screen</button>
        </div>
      )
    }
    return <MarqueeStream data={data} />
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    marquee: PropTypes.shape({
      count: PropTypes.number.isRequired,
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default IndexComponent;
