import React, { Component } from 'react';
import dayjs from 'dayjs';
import qs from 'qs';
import RegularLayout from "./../layout/Regular.js";
// import PropTypes from 'prop-types';
// import RegularLayout from "./../layout/Regular.js";
import { watchEventAgenda, watchGeneralAgenda } from '../../Services.js';
import { handleError } from '../../Helper.js';
// import { timeoutCollection } from 'time-events-manager';
import { GeneralAgenda } from './GeneralAgenda';
import { GroupAgenda } from './GroupAgenda';
import { RoomAgenda } from './RoomAgenda';

import './agenda.css';
import { RainFocusSessionSimplified } from './RainFocusModel';

const weekdays = { 'sunday': 'Domingo', 'monday': 'Lunes', 'tuesday': 'Martes', 'wednesday': 'Miércoles', 'thursday': 'Jueves', 'friday': 'Viernes', 'saturday': 'Sábado' };

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { feedsGeneral: [], feedsEvent: [] }
  }
  loadEventData = (data) => {
    const feeds = data.map(e => new RainFocusSessionSimplified(e));
    const sortedFeeds = feeds.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`).unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`).unix());
    this.setState({ feedsEvent: sortedFeeds })
  }

  loadGeneralData = (data) => {
    const feeds = data.map(e => new RainFocusSessionSimplified(e));
    const sortedFeeds = feeds.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`).unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`).unix());
    this.setState({ feedsGeneral: sortedFeeds })
  }

  componentWillMount() {
    watchEventAgenda(this.loadEventData, handleError)
    watchGeneralAgenda(this.loadGeneralData, handleError)
  }

  filter = () => {
    const defaultDate = dayjs('2019-10-10 19:30').format('YYYY-MM-DD');
    const { room, date, type } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const releventDate = date || defaultDate;
    if (type === 'general') {
      return this.state.feedsGeneral.filter(e => e.getSessionType().toLowerCase() === 'general').filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'group') {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general')
        .filter(e => (e.getRoom().toLowerCase().startsWith('tulum') || e.getRoom().toLowerCase().startsWith('chic')))
        .filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'room' && room && releventDate) {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => (e.getRoom().toLowerCase() === room.toLowerCase()) && (dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD')))
    }
    if (room) {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => e.getRoom().toLowerCase() === room.toLowerCase());
    }
    if (releventDate) {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => {
        return dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD')
      });
    }
    return this.state.feedsEvent;
  }

  componentWillUnmount() {
  }

  renderExperience = () => {
    const agendas = this.filter();
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'general') {
      return (
        <div className='agenda-container'>
          <div className='day'>{`${weekdays[dayjs().format('dddd').toLowerCase()]}`} . {`${dayjs().format('dddd D')}`}</div>
          <GeneralAgenda data={agendas} />
        </div>
      )
    }
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'group') {
      return (
        <div className='agenda-container'>
          <div className='day'>{`${weekdays[dayjs().format('dddd').toLowerCase()]}`} . {`${dayjs().format('dddd D')}`}</div>
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

  isReady() {
    return !this.state.feedsGeneral.length <= 0 && !this.state.feedsEvent.length <= 0;
  }

  render() {
    const { agenda: componentConfig } = this.props.config;
    return (
      <RegularLayout
        isReady={this.isReady()}
        config={this.props.config}
        title={componentConfig.title}
        className="agenda-container"
        hideBgWave={componentConfig.hideBgWave}
    >
      <div className='dashboard-content'>
        { this.renderExperience() }
      </div>

    </RegularLayout>)
  }
}

export default IndexComponent;
