import React, { Component } from 'react';
import dayjs from 'dayjs';
import qs from 'qs';
// import PropTypes from 'prop-types';
// import RegularLayout from "./../layout/Regular.js";
// import { pollFeatured, pollFeaturedSprinklr } from '../../Services.js';
// import { queryString, handleError, getQueryString } from '../../Helper.js';
// import { timeoutCollection } from 'time-events-manager';
import { GeneralAgenda } from './GeneralAgenda';
import { GroupAgenda } from './GroupAgenda';
import { RoomAgenda } from './RoomAgenda';

import './agenda.css';
import { data } from './data.js';
import { RainFocusSessionSimplified } from './RainFocusModel';

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { feeds: [] }
  }

  componentWillMount() {
    const feeds = data.map(e => new RainFocusSessionSimplified(e));
    const sortedFeeds = feeds.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`).unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`).unix());
    this.setState({ feeds: sortedFeeds })
  }

  filter = () => {
    const defaultDate = dayjs('2019-10-10 19:30').format('YYYY-MM-DD');
    const { room, date, type } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const releventDate = date || defaultDate;
    if (type === 'general') {
      return this.state.feeds.filter(e => e.getSessionType().toLowerCase() === 'general').filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'group') {
      return this.state.feeds.filter(e => e.getSessionType().toLowerCase() !== 'general')
        .filter(e => (e.getRoom().toLowerCase().startsWith('tulum') || e.getRoom().toLowerCase().startsWith('chic')))
        .filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'room' && room && releventDate) {
      return this.state.feeds.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => (e.getRoom().toLowerCase() === room.toLowerCase()) && (dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD')))
    }
    if (room) {
      return this.state.feeds.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => e.getRoom().toLowerCase() === room.toLowerCase());
    }
    if (releventDate) {
      return this.state.feeds.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => {
        return dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD')
      });
    }
    return this.state.feeds;
  }

  componentWillUnmount() {
  }
  render() {
    const agendas = this.filter();
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'general') {
      return (
        <div className='agenda-container'>
          <GeneralAgenda data={agendas} />
        </div>
      )
    }
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'group') {
      return (
        <div className='agenda-container'>
          <GroupAgenda data={agendas} />
        </div>
      )
    }
    return (
      <div className='agenda-container'>
        <RoomAgenda data={agendas} />
      </div>
    )
  }
}

export default IndexComponent;
