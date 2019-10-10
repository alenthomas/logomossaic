import React, { Component } from 'react';
import dayjs from 'dayjs';

export class GeneralAgenda extends Component {
  render() {
    return (
      <div className='general-agenda'>
        <div className='header'>
          <div className='logo-right' />
          <div className='logo-left'/>
        </div>
        <div className='agenda'>
          <div className='heading'>AGENDA GENERAL</div>
          <div className='sub-heading'>GENERAL AGENDA</div>
          <div className='content'>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Topic</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map(dt => (
                  <tr key={dt.getSessionTitle()}>
                    <td>
                      {`${dayjs(`${dt.getDate()} ${dt.getStartTime()}`).format('hh:mm a')} - ${dayjs(`${dt.getDate()} ${dt.getEndTime()}`).format('hh:mm a')}`}
                    </td>
                    <td>{dt.getSessionTitle()}</td>
                  </tr>
    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}