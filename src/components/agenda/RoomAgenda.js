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
    console.log('in filter');
    let currentTime = dayjs().unix();
    // console.log(currentTime)
    let data = this.props.data.filter(e => {
      let t = dayjs(`${e.getDate()} ${e.getEndTime()}`).unix()
      console.log((t - currentTime) > 0);
      return t - currentTime > 0;
    });
    this.setState({ data })

  }
  render() {
    this.props.data.map(e => console.log(e.getRoom(), e.getStartTime(), e.getEndTime()));
    console.log(this.state);
    const agenda = this.state.data[0];
    if (this.state.data.length > 0) {
      return (
        <div className='room-agenda'>
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
    return (
      <div className='room-agenda'>
        <div className='live-logo'>
          <div className='logo'></div>
        </div>
      </div>
    )
  }
}