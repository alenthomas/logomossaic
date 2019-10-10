import React, { Component } from 'react';
import dayjs from 'dayjs';

export class GroupAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  componentWillMount() {
    this.interval = setInterval(() => {
      // console.log('in setInterval', this.state.current, this.props.data.length);
      if (this.state.current < this.props.data.length) {
        // console.log('incrementing current');
        this.setState(prevState => ({ current: prevState.current + 1 }));
      }
      if (this.state.current >= this.props.data.length) {
        // console.log('resetting current');
        this.setState({ current: 0 });
    }}, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const agenda = this.props.data[this.state.current];
    return (
      <div className='group-agenda'>
        <div className='live-logo'>
          <div className='logo'></div>
        </div>
        <div className='session-name'>
          {agenda.getSessionTitle()}
        </div>
        <div className='details'>
         <div className='time-and-room'>
           <div className='time'>
             {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('dddd MMM DD, hh:mm a')} - ${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')}`}
           </div>
           <div className='room'>
             {`| ${agenda.getRoom()}`}
           </div>
         </div>
            {agenda.getAuthors().map(e => (
              <div key={e.fullName} className='author'>
                <div className='name'>{e.fullName}</div>
                <div className='job-title'>{e.jobTitle}</div>
                <div className='company'>{e.companyName}</div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}