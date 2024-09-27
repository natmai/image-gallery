import React from 'react';
import './Pin.css';

const Pin = ({ size, imageUrl }) => {
  return (
    <div className={`pin ${size}`}>
      <img src={imageUrl} alt="pin content" className="pin-image" />
    </div>
  );
};

export default Pin;
