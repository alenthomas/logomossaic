import React, {Component} from 'react';

export default class ArWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }
  componentDidMount() {
    console.log('hjalskjlksajlk')
    fetch('https://devapi.fankave.com/ids/ar/getName?json=true')
    .then(e => e.json())
    .then(e => this.setState({data: e}))
    .catch(e => this.setState({data: {"success":true,"msg":"Name retrieved successfully","data":{"name":"error"}}}))
  }
  render() {
    if(this.state.data) {
      return (
        <div style={{'color': 'red', 'font-size': '1.5em', 'margin-left': '10px'}}>Welcome <span style={{'color': 'red', 'font-size': '2em', 'padding-left': '10px'}}>{this.state.data.data.name}</span></div>
      )
    }
    return(
      <div>{null}</div>
    )
  }
}
