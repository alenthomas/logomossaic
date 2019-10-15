import React, { Component } from 'react';
import dayjs from 'dayjs';

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
    let data = this.props.data.filter(e => {
      let t = dayjs(`${e.getDate()} ${e.getEndTime()}`).unix()
      return t - currentTime > 0;
    });
    this.setState({ data })

  }
  render() {
    const agenda = this.state.data[0];
    if (this.state.data.length > 0) {
      return (
        <div className='room-agenda'>
          <div className='session-name'>
            {agenda.getSessionTitle()}
          </div>
          <div className='details'>
           <div className='time-and-room'>
             <div className='time'>
                {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('dddd MMM DD,')}`}
                <div className='start-end'>
                  {`${dayjs(`${agenda.getDate()} ${agenda.getStartTime()}`).format('hh:mm a')} -`}
                  {`${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')}`}
                </div>
                {/* {`${dayjs(`${agenda.getDate()} ${agenda.getEndTime()}`).format('hh:mm a')`} */}
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
    return (
      <div className='room-agenda'>
        <div className='live-logo'>
          <div className='logo'></div>
        </div>
      </div>
    )
  }
}