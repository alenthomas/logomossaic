import React, { Component } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import qs from 'qs';
import { watchEventAgenda, watchGeneralAgenda } from '../../Services.js';
import { handleError } from '../../Helper.js';
// import { timeoutCollection } from 'time-events-manager';
import { GeneralAgenda } from './GeneralAgenda';
import { GroupAgenda } from './GroupAgenda';
import { RoomAgenda } from './RoomAgenda';

import './agenda.css';
import { RainFocusSessionSimplified } from './RainFocusModel';

export const weekdays = { 'sunday': 'Domingo', 'monday': 'Lunes', 'tuesday': 'Martes', 'wednesday': 'Miércoles', 'thursday': 'Jueves', 'friday': 'Viernes', 'saturday': 'Sábado' };
export const months = { 'october': 'Octubre', 'november': 'Noviembre', 'december': 'Diciembre' }

dayjs.extend(customParseFormat);

class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { feedsGeneral: [], feedsEvent: [] }
  }
  loadEventData = (data) => {
    const feeds = data.map(e => new RainFocusSessionSimplified(e));
    const sortedFeeds = feeds.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix());
    this.setState({ feedsEvent: sortedFeeds })
  }

  loadGeneralData = (data) => {
    const feeds = data.map(e => new RainFocusSessionSimplified(e));
    const sortedFeeds = feeds.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix());
    this.setState({ feedsGeneral: sortedFeeds })
  }

  componentWillMount() {
    watchEventAgenda(this.loadEventData, handleError)
    watchGeneralAgenda(this.loadGeneralData, handleError)
  }

  getDefaultDate = () => {
    const defaultDate = dayjs().format('YYYY-MM-DD');
    let { date } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const releventDate = date || defaultDate;
    return releventDate;
  }

  getDefaultTime = () => {
    const defaultTime = dayjs().format('HH:mm');
    let { time } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const releventTime = time || defaultTime;
    return releventTime;
  }

  filter = () => {
    // const defaultDate = dayjs('2019-10-10 19:30').format('YYYY-MM-DD');
    const { room, type } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    const releventDate = this.getDefaultDate()
    if (type === 'general') {
      return this.state.feedsGeneral.filter(e => e.getSessionType().toLowerCase() === 'general').filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'group') {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general')
        .filter(e => (e.getRoom().toLowerCase().startsWith('tulum') || e.getRoom().toLowerCase().startsWith('chic')))
        .filter(e => dayjs(e.getDate()).format('YYYY-MM-DD') === dayjs(releventDate).format('YYYY-MM-DD'))
    }
    if (type === 'room' && room && releventDate) {
      return this.state.feedsEvent.filter(e => e.getSessionType().toLowerCase() !== 'general').filter(e => (e.getRoom().toLowerCase() === room.toLowerCase()) && (dayjs(e.getDate()).unix() >= dayjs(releventDate).unix()))
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
    const releventDate = this.getDefaultDate();
    const releventTime = this.getDefaultTime();
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'general') {
      return (
        <div className='agenda-container'>
          <div className='logos'>
            <div className='logo-left'></div>
            <div className='logo-right'></div>
          </div>
          <div className='day'>{`${weekdays[dayjs(releventDate).format('dddd').toLowerCase()]}`} . {`${dayjs(releventDate).format('dddd D')}`}</div>
          <GeneralAgenda data={agendas} />
        </div>
      )
    }
    if (qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).type === 'group') {
      return (
        <div className='agenda-container'>
          <div className='logos'>
            <div className='logo-left'></div>
            <div className='logo-right'></div>
          </div>
          <div className='day'>{`${weekdays[dayjs(releventDate).format('dddd').toLowerCase()]}`} . {`${dayjs(releventDate).format('dddd D')}`}</div>
          <GroupAgenda data={agendas} />
        </div>
      )
    }
    return (
      <div className='agenda-container'>
        <RoomAgenda data={agendas} releventDate={releventDate} releventTime={releventTime} />
      </div>
    )
  }

  render() {
    // console.log(this.state);
    return (
      <div className='dashboard-content'>
        { this.renderExperience() }
      </div>
    )
  }
}

export default IndexComponent;
