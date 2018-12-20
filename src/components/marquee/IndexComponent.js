import React, { Component } from 'react';

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
    let params = getQueryString(this.props.location.search);
    watchSocial(params.ctag, params.filter, this.loadData, handleError);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search) {
      timeoutCollection.removeAll();
      let params = getQueryString(this.props.location.search);
      watchSocial(params.ctag, params.filter, this.loadData, handleError);
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

export default IndexComponent;
