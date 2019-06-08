import React, { Component } from 'react';
import ciscolive from '../../../public/assets/logo/ciscolive-cancun.png';

class Results extends Component {
  render() {
    return (
      <div className='results'>
        <div className='first'>
          {this.props.feed.slice(0, 1).map((e, i) => <ResultCard key={e.id} info={e} rank={i+1} />)}
        </div>
        <div className='second-third'>
          {this.props.feed.slice(1, 3).map((e, i) => <ResultCard key={e.id} info={e} rank={i+2} />)}
        </div>
        <div className='rest'>
          {this.props.feed.slice(3, 6).map((e, i) => <ResultCard key={e.id } info={e} rank={i+4} />)}
        </div>

      </div>
    )
  }
}

export default Results;

export const ResultCard = ({info, rank}) => {
  return (
    <div className='result-card'>
      <div className='card-photo'>
        <img src={info.src} alt='api content' />
      </div>
      <div className='card-body'>
        <div className='logo-bck'><div className='logo'><img src={ciscolive} alt='logo'/></div></div>
        <div className='heading'>Cisco Live</div>
        <div className='like'><i className='icon icon-heart-filled'/><span>{info.votes}</span></div>
        <div className='rank'>{`#${rank}`}</div>
      </div>
    </div>
  )
}