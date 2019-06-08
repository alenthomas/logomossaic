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

  loadData = (data) => {
    let filtered = data.filter((d) => d.source.name === 'Twitter');
    this.setState({data: filtered});
  }

  componentWillMount() {
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

  render() {
    let data = this.state.data;
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
