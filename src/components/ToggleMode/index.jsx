import React from 'react';
import './ToggleMode.scss';

const ToggleMode = ({status, handleToggle}) => {
  return (
    <div className="toggle-wrap">
    <div onClick={handleToggle} className="toggle-mode">
      <div className={`toggle-mode__circle  ${status ? 'live' : 'test'}`} />
    </div>
    <p>
      {status ? 'Working mode' : 'Test mode'}
    </p>
    </div>
  )
}

export default ToggleMode;
