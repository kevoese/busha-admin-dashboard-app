import React from 'react';
import './UserProfile.scss';

const UserProfile = ({name}) => {
  return (
      <div className="user-profile">
        <div className="user-profile__circle">
          {name.charAt(0)}
        </div>
        <div>
          {name}
      </div>
    </div>
  )
}

export default UserProfile;
