import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userData } from './userData';
import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { startResourceSystem } = props.startResourceSystem;
  let { mining } = props.resourcesState.resourcesState;
  return (
    <div className="gameButtons w-auto h-full">
      <button className="btn" onClick={() => startResourceSystem()}>
        {mining ? 'Stop Mining' : 'Start Mining'}
      </button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
    </div>
  );
};

export default GameButtons;
