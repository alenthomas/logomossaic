import React, { Component } from 'react';
import dayjs from 'dayjs';

export class GeneralAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], counter: 0 }
  }
  componentDidMount() {
    this.setState({ data: this.props.data })
    if (window.innerWidth > window.innerHeight) {
      this.shuffleHorizontal();
      this.interval = setInterval(this.shuffleHorizontal, 15000)
    } else {
      this.shuffleVertical();
      this.interval = setInterval(this.shuffleVertical, 15000)
    }
  }
  shuffleHorizontal = () => {
    if (this.state.counter < this.props.data.length) {
      this.setState(prevState => ({counter: prevState.counter+4, data: this.props.data.slice(prevState.counter, prevState.counter+4)}))
    } else {
      this.setState({counter: 4, data: this.props.data.slice(0, 4)})
    }
  }

  shuffleVertical = () => {
    if (this.state.counter < this.props.data.length) {
      this.setState(prevState => ({counter: prevState.counter+8, data: this.props.data.slice(prevState.counter, prevState.counter+8)}))
    } else {
      this.setState({counter: 8, data: this.props.data.slice(0, 8)})
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='general-agenda'>
        <div className='agenda'>
          <div className='intro'>
            <div className='heading'>AGENDA GENERAL</div>
            <div className='sub-heading'>GENERAL AGENDA</div>
            </div>
          <div className='content'>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Topic</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(dt => (
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