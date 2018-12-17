import React, { Component } from 'react';

import { watchSocial } from '../../Services.js'

import MarqueeBlue from './MarqueeBlue.js';

import './MarqueeBlue.css';
import { handleError } from '../../Helper.js';
import { timeoutCollection } from 'time-events-manager';

class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  loadData = (data) => {
    let filtered = data.filter((d) => d.source.type === 'twitter');
    this.setState({data: filtered});
  }

  componentWillMount() {
    watchSocial(this.loadData, handleError);
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

export default IndexComponent;
