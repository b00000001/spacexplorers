import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userData } from './userData';
import React, { useState, useContext } from 'react';

const GameButtons = () => {
   
  return (
    <div className="gameButtons w-auto h-full">
      <button className="btn" onClick={() => handleClick()}>
        Add Resources
      </button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
    </div>
  );
};

export default GameButtons;
