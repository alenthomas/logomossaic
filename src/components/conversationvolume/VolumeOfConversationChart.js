import lodash from "lodash";
import classNames from "classnames";
import React, { Component } from 'react';
import {AreaChart, XAxis, YAxis, CartesianGrid, Area} from 'recharts';

const INTERVAL = {
  'day': {
    count: 7,
    formatter: (name) => {
      var year, month, day
      [year, month, day] = lodash.split(name, "-");

      return `${month}/${day}/${year[2]}${year[3]}`;
    }
  },
  'hour': {
    count: 12,
    formatter: (name) => {
      var _date, timeRange;

      [_date, timeRange] = lodash.split(name, " ");

      var timeStart, _timeEnd;

      [timeStart, _timeEnd] = lodash.split(timeRange, "-");

      return `${timeStart}:00`;
    }
  }
};

const AREA_COLOR = "#2D6DB0";

class VolumeOfConversationChart extends Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };

    this.resetDimensions = this.resetDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetDimensions);
    this.resetDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetDimensions);
  }

  resetDimensions() {
    var canvasContainer = this.refs.canvasContainer;
    this.setState({width: canvasContainer.clientWidth, height: canvasContainer.clientHeight});
  }

  getData() {
    let data = this.props.data;
    let intervalCount = INTERVAL[this.props.groupBy].count;
    let formatter = INTERVAL[this.props.groupBy].formatter;

    return lodash(data).map((value, name) => {
      return {"name": name, "value": value}
    }).sortBy("name").takeRight(intervalCount).map((data) => {
      return {name: formatter(data.name), value: data.value};
    }).value();
  }

  render() {
    return (
      <div className="chart-container">
        <div ref="canvasContainer" className={classNames("volume-chart-container", `chart-groupby-${this.props.groupBy}`)}>
          <AreaChart data={this.getData()} height={this.state.height} width={this.state.width}>
            <defs>
              <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={AREA_COLOR} stopOpacity={1}/>
                <stop offset="95%" stopColor={AREA_COLOR} stopOpacity={0.7}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" orientation="top" axisLine={false} tickLine={false}/>
            <YAxis dataKey="value" tickLine={false}/>
            <CartesianGrid horizontal={false} strokeDasharray="5 5"/>
            <Area type="monotone" dataKey="value" stroke={AREA_COLOR} strokeWidth={4} fillOpacity={0.5} fill="url(#gradientFill)"/>
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default VolumeOfConversationChart;
