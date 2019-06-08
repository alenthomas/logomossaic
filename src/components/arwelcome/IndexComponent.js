import React, {Component} from 'react';
import './arwelcome.css';
import { getName } from '../../Services';
import { handleError } from '../../Helper';

export default class ArWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  componentDidMount() {
    getName(this.loadData, handleError);
  }

  loadData = ({data}) => {
    if(data) {
      this.setState({name: data.name});
    }
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
