import React, { Component } from 'react';
import lodash from 'lodash';

import TweetColumn from './TweetColumn.js';

const columnCount = 3;

export default class MasonaryStreamV2 extends Component {
  constructor(props) {
    super(props);
    this.currentColumn = 0;
    this.state = {columns: this.columnize(this.props.data)};
  }

  addToCurrentColumn(columns, datum) {
    columns[this.currentColumn] = columns[this.currentColumn].concat(datum.id);

    ++this.currentColumn;
    if(this.currentColumn > columnCount) {
      this.currentColumn = 0;
    }
  }

  columnize(data) {
    let columns = {'0': [], '1': [], '2': [], '3': []};

    lodash.map(data, (datum) => {
      this.addToCurrentColumn(columns, datum);
    });

    return columns;
  }

  componentWillReceiveProps(nextProps) {
    let { columns } = this.state;
    const existingIds = lodash.chain(columns).values().flatten().value();

    lodash.map(nextProps.data, (datum) => {
      if(!lodash.includes(existingIds, datum.id)) {
        this.addToCurrentColumn(columns, datum);
      }
    });

    this.setState({columns: columns});
  }

  componentDidMount() {
    this.props.onComponentDidMount();
  }

  renderColumn(ids, columnId) {
    const columnData = lodash.chain(this.props.data)
                             .filter((datum) => lodash.includes(ids, datum.id))
                             .sortBy((datum) => Date.parse(datum.createdAt))
                             .value();
    const columnName = columnId;

    return <TweetColumn data={columnData} key={columnId} columnName={columnName} />
  }

  render() {
    const { columns } = this.state;

    return <div className='tweet-columns-v2'>
      {
        lodash.map(columns, (col, i) => this.renderColumn(col, `tweet-column-${i}`))
      }
    </div>
  }
};

