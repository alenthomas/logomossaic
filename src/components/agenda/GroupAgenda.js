import React, { Component } from 'react';
import dayjs from 'dayjs';

export class GroupAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: []
    }
  }
  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.length > 0 && this.props.data.length !== prevProps.data.length) {
      if (window.innerWidth > window.innerHeight) {
      this.shuffleHorizontal();
      this.interval = setInterval(this.shuffleHorizontal, 20000)
    } else {
      this.shuffleVertical();
      this.interval = setInterval(this.shuffleVertical, 20000)
    }
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
      this.setState(prevState => ({counter: prevState.counter+6, data: this.props.data.slice(prevState.counter, prevState.counter+6)}))
    } else {
      this.setState({counter: 6, data: this.props.data.slice(0, 6)})
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='group-agenda'>
        <div className='agenda'>
          <div className='intro'>
            <div className='heading'>AGENDA GENERAL</div>
            <div className='sub-heading'>GENERAL AGENDA</div>
            </div>
          <div className='content'>
            <table>
              <thead>
                <tr>
                  <th>Time - Hora</th>
                  <th>Topic - Tema</th>
                  <th>Location - Locación</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(dt => (
                  <tr key={dt.getSessionTitle()}>
                    <td>
                      {`${dayjs(`${dt.getDate()} ${dt.getStartTime()}`).format('hh:mm a')} - ${dayjs(`${dt.getDate()} ${dt.getEndTime()}`).format('hh:mm a')}`}
                    </td>
                    <td>{dt.getSessionTitle()}</td>
                    <td>{dt.getRoom()}</td>
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