import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userData } from './userData';
import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { startResourceSystem } = props.startResourceSystem;
  let { resourcesState } = props.resourcesState;
  return (
    <div className="gameButtons w-auto h-full flex">
      <div>
        <button className="btn" onClick={() => startResourceSystem()}>
          {resourcesState.mining ? 'Stop Mining' : 'Start Mining'}
        </button>
      </div>
      <div className="px-2">
        {resourcesState.resources > 10 && (
          <button className="btn">Install AI Miner</button>
        )}
      </div>
    </div>
  );
};

export default GameButtons;
