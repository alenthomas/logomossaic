import React, { Component } from 'react';

import { watchSocial } from '../../Services.js'

import MarqueeStream from './Marquee.js';

import './Marquee.css';

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
    watchSocial(this.loadData);
  }

  componentDidMount() {
    document.getElementById('root').style.background = "none";
  }

  render() {
    let data = this.state.data;

    return <MarqueeStream data={data} />
  }
}

export default IndexComponent;
