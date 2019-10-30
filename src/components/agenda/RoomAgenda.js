import React, { Component } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { weekdays, months } from './IndexComponent';
dayjs.extend(customParseFormat);

export class RoomAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, data: [] };
  }
  componentDidUpdate(prevProps) {
    if (this.props.data.length > 0 && this.props.data.length !== prevProps.data.length) {
      this.filter();
      this.interval = setInterval(this.filter, 30000)
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  filter = () => {
    let currentTime = dayjs(`${this.props.releventDate} ${this.props.releventTime}`, 'YYYY-MM-DD HH:mm').unix();
    const sortedFeeds = this.props.data.sort((a, b) => dayjs(`${a.getDate()} ${a.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix() - dayjs(`${b.getDate()} ${b.getStartTime()}`, 'YYYY-MM-DD HH:mm').unix());
    // console.log('sorted');
    // sortedFeeds.map(e => console.log('s', e.getDate(), e.getStartTime(), e.getEndTime()))
    let data = sortedFeeds.filter(e => {
      let t = dayjs(`${e.getDate()} ${e.getEndTime()}`, 'YYYY-MM-DD HH:mm').unix()
      return t - currentTime > 0;
    });
    // console.log('data');
    // data.map(e => console.log('d', e.getDate(), e.getStartTime(), e.getEndTime()));
    if (data.length === 0 && this.props.data.length > 0) {
      data = [this.props.data[this.props.data.length - 1]];
    }
    this.setState(prevState => {
      if (prevState.data.length === 0 && prevState.current === 0) {
        return {current: 0, data}
      }
      return { current: prevState.current + 1, data }
    })
  }

  formatJobTitle = (s) => {
    let string = s.replace('.', " ").split(' ');
    return string.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' ')
  }
  render() {
    const agenda = this.state.data[0];
    if (this.state.data.length > 0) {
      return (
        <div className='room-agenda'>
          <div className='logo-left'></div>
          <div className='session-name'>
            {agenda.getSessionTitle()}
          </div>
          <div className='details'>
            <div className='time-and-room'>
              <div className='group-name'>Expocenter</div>
              <div className='room'>
               {`${agenda.getRoom()}`}
             </div>
             <div className='time'>
                {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('dddd, MMMM DD')}`}
                <div className='time-spanish'>{`${weekdays[`${dayjs(`${agenda.getDate()}`).format('dddd').toLowerCase()}`]} ${dayjs(`${agenda.getDate()}`).format('DD')}, ${months[`${dayjs(agenda.getDate()).format('MMMM').toLowerCase()}`]}`}</div>
                <div className='start-end'>
                  {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('hh:mm a')} - `}
                  {`${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')}`}
                </div>
              </div>
            </div>
              {agenda.getAuthors().filter((e, i) => i === 0).map(e => (
                <div key={e.fullName} className='author'>
                  <div className='name'>{e.fullName}</div>
                  <div className='job-title'>{this.formatJobTitle(e.jobTitle) }</div>
                  <div className='company'>{e.companyName}</div>
                </div>
              ))}
          </div>
          <div className='logo-center'></div>
        </div>
      )
    }
    return (
      <div className='room-agenda'>
        <div className='logo-left'></div>
        <div className='logo-center'></div>
      </div>
    )
  }
}