import React from 'react';

import twitter from '../../../public/assets/logo/twitter.png';
import twittersvg from '../../../public/assets/logo/twitter.svg';
import instagram from '../../../public/assets/logo/instagram.svg';
import instagrampng from '../../../public/assets/logo/instagram.png';
import ciscolive from '../../../public/assets/logo/ciscolive-cancun.png';

export const Card = ({info, selected}) => {
  const source = info.getSource();
  return (
    <div className='card' onClick={() => selected(info)}>
      <div className='card-header'>
      </div>
      <div className='card-body'>
        <div className='photo'>
          <img className='media' src={info.getPhotoUrl()} alt='api content'/>
          <Logo info={info} className={`logo ${source === 'instagram'? 'instagram': ''}`} src={info.getSource() === 'twitter' ? twitter: instagrampng} />
        </div>
      </div>
      <div className='card-footer'>

      </div>
    </div>
  )
}

const Logo = ({info, className, src}) => {
  try {
    if(info.getSource()==='twitter') {
      return (<img className={className} src={src||twittersvg} alt='twitter'/>);
    }
    if(info.getSource() === 'instagram') {
      return (<img className={className} src={src||instagram} alt='instagram'/>)
    }
    return null;
  } catch(err) {
    return null;
  }
}

export const Overlay = ({info, closeAction, like, votedAction, votes}) => {
  let likeValue = '';
  if(like === 0) {
    likeValue='';
  } else if(like === 1) {
    likeValue = 'up';
  } else if(like === 2) {
    likeValue = 'down';
  } else {
    likeValue='';
  }
  return (
    <div className='overlay'>
      <div className='heading'>Vote Here !</div>
      <div className='selected-card'>
        <div className='likes'><i className={`icon icon-heart-filled ${likeValue}`}/></div>
        <div className='selected-card-photo'>
          <img src={info.getPhotoUrl()} alt='api content' />
        </div>
        <div className='selected-card-logo'></div>
        <div className='selected-card-body'>
          <div className='cisco-logo-bck'><div className='cisco-logo'><img className={info.getAuthorPhoto() ? 'author-pic': 'default-pic'}src={info.getAuthorPhoto() || ciscolive} alt='cisco-live'/></div></div>
          <div className='cisco-heading'>{info.getAuthorName() || 'Cisco Live'}</div>
          <div className='social-logo'>
            <Logo info={info} />
          </div>
          <div className='current up-vote'><i className='icon icon-heart-filled'/>{votes.up}</div>
        </div>
      </div>
      <div className='vote'>
        <div className={`vote-action up ${like===1? 'blink': ''}`} onClick={() => votedAction(1)}><i className='icon icon-heart-filled'/></div>
      </div>

      <div className='close'><div onClick={closeAction}><i className='icon icon-cancel'/></div></div>
    </div>
  )
}
