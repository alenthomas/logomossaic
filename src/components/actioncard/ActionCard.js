import React from 'react';

export const ActionCard = (props) => {
  return (
    <div className='call-to-action-card'>
      {props && props.children ? props.children: null}
    </div>
  )
}