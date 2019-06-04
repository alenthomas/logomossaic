import React, {Component} from 'react';
import './arwelcome.css';

let URL = 'http://devapi.fankave.com/ids'

export default class ArWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  componentDidMount() {
    fetch(`${URL}/ar/getName?json=true`)
    .then(e => e.json())
    .then(({data}) => this.setState({name: data.name}))
    .catch(e => {
      console.error('Error: ', e);
      this.setState({name: ''})
    })
  }
  render() {
    return(
      <div className='ar-welcome'>
        <div className='logo'></div>
        <div className='welcome'>Welcomes</div>
        <div className='name'>{this.state.name}</div>
      </div>
    )
  }
}
