import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { watchSocial } from '../../Services.js'

import MarqueeBlue from './MarqueeBlue.js';

import './MarqueeBlue.css';
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

  UNSAFE_componentWillMount() {
    let { marqueeblue: {count, refreshrate} } = this.props.config;
    let params = getQueryString(this.props.location.search);
    watchSocial(this.loadData, handleError, params.ctag, params.filter, count, refreshrate);
  }

  componentDidUpdate(prevProps) {
    let { marqueeblue: {count, refreshrate} } = this.props.config;
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
    timeoutCollection.removeAll();
  }

  render() {
    let data = this.state.data;

    return <MarqueeBlue data={data} />
  }
}

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    marqueeblue: PropTypes.object.isRequired,
  }).isRequired
};

IndexComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    marqueeblue: PropTypes.shape({
      count: PropTypes.number.isRequired,
      refreshrate: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default IndexComponent;
