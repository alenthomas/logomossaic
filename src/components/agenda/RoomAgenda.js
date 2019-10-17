import React, { Component } from 'react';
import dayjs from 'dayjs';
import { weekdays, months } from './IndexComponent';

export class RoomAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, data: [] };
  }
  componentDidMount() {
    this.filter();
    this.interval = setInterval(this.filter, 30000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  filter = () => {
    let currentTime = dayjs().unix();
    console.log(this.props.data);
    let data = this.props.data.filter(e => {
      let t = dayjs(`${e.getDate()} ${e.getEndTime()}`).unix()
      return t - currentTime > 0;
    });
    this.setState(prevState => {
      if (prevState.data.length === 0 && prevState.current === 0) {
        return {current: 0, data}
      }
      return { current: prevState.current + 1, data }
    })

  }

  formatJobTitle = (s) => {
    let string = s.split(' ');
    return string.map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' ')
  }
  render() {
    const agenda = this.state.data[this.state.current];
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
                  {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('hh:mm a')} -`}
                  {`${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')}`}
                </div>
                {/* {`${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')`} */}
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