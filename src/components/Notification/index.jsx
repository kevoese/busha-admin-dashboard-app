import React from 'react';
import './Notification.scss';

const Notification = ({number}) => {
  return (
    <div className="notification">
      <img src='https://res.cloudinary.com/store-manager/image/upload/v1569217511/bell.svg' alt='bell' />
     { number && <div className="notification__circle">
        <p>{number}</p>
      </div>}
    </div>
  )
}

export default Notification
