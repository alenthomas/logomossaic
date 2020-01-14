import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getLeaders } from '../../Services.js'

import MarqueeStream from './Marquee.js';

import './Marquee.css';
import { handleError } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';
import QrLeaders from '../../models/Qr.js';

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
    let qrResults = data.map(qr => new QrLeaders(qr)).sort((a, b) => b.scans-a.scans);
    this.setState({ data: qrResults });
  }

  componentWillMount() {
    let refreshrate = this.state.data.length > 0 ? this.state.data.length * 25 : undefined;
    getLeaders(this.loadData, handleError, refreshrate)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let refreshrate = this.state.data.length > 0 ? this.state.data.length * 25 : undefined;
      getLeaders(this.loadData, handleError, refreshrate);
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
