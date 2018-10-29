import React, { Component } from 'react';
import lodash from 'lodash';

import TweetColumn from './../masonarystream/TweetColumn.js';

export default class HorizontalStream extends Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }

  render() {
    const data = lodash.sortBy(this.props.data, (d) => Date.parse(d.createdAt));
    const columnName = 'h-column-1';

    return <div className='h-column'>
      <TweetColumn data={data} columnName={columnName} />
    </div>
  }
};
