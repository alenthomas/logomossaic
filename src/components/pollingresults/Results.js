import React, { Component } from 'react';
const defaultpic = '/assets/default.jpg';

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

export const getImg = (info) => {
  if(info.meta && info.meta.userpic) {
    return info.meta.userpic;
  }
  return defaultpic;
}

export const getUsername = (info) => {
  if(info.meta && info.meta.username) {
    return info.meta.username;
  }
  return 'Cisco Live';
}
export const getHandle = (info) => {
  if(info.meta && info.meta.handle) {
    return `@${info.meta.handle}`;
  }
  return '';
}

export const ResultCard = ({info, rank}) => {
  return (
    <div className='result-card'>
      <div className='card-photo'>
        <img src={info.src} alt='api content' />
      </div>
      <div className='card-body'>
        <div className='logo-bck'><div className='logo'><img src={getImg(info)} alt='user'/></div></div>
        <div className='name'>{getUsername(info)}</div>
        <div className='handle'>{getHandle(info)}</div>
        <div className='like'><i className='icon icon-heart-filled'/><span>{info.votes}</span></div>
        <div className='rank'>{`#${rank}`}</div>
      </div>
    </div>
  )
}