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
      data: []
    };
  }

  loadData = (data) => {
    let filtered = data.filter((d) => d.source.name === 'Twitter');
    this.setState({data: filtered});
  }

  componentWillMount() {
    let { marquee } = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchSocial(this.loadData, handleError, params.ctag, params.filter, marquee.count);
  }

  componentDidUpdate(prevProps) {
    let { marquee } = this.props.config;
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchSocial(this.loadData, handleError, params.ctag, params.filter, marquee.count);
    }
  }

  componentDidMount() {
    document.getElementById('root').style.background = "none";
  }

  componentWillUnmount() {
    timeoutCollection.removeAll();
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
    marquee: PropTypes.object.isRequired,
  }).isRequired
};

export default IndexComponent;
