import React, { Component } from 'react';

const RANK_IMAGES = {
  1: '/assets/medals/gold.png',
  2: '/assets/medals/silver.png',
  3: '/assets/medals/bronze.png'
}

class LeaderRow extends Component {

  getMedal() {
    let rankImage = RANK_IMAGES[this.props.rank];
    if(rankImage) {
      return <img className="medal" alt="" src={rankImage}/>
    }
  }

  getNetworkIcon(data) {
    return (data.leader.provider === "Instagram") ?
      '/assets/logo/instagram.svg' : 
      '/assets/logo/twitter.svg';
  }

  render() {
    return (
      <div className="leader-row">
        <object className="avatar" data={this.props.leader.img[0]} type="image/png">
          <img src="/assets/default.jpg" alt="Tweeter"/>
        </object>
        <div className="info">
          <div className="name">{this.props.leader.name}</div>
          <div className="handle">@{this.props.leader.handle}</div>
        </div>
        <div className="social">
          <div className="posts-count">
            <img src={this.getNetworkIcon(this.props)} alt="" />{this.props.leader.count}
          </div>  
        </div>
        {this.getMedal()}
      </div>
    )
  }
}

export default LeaderRow;
