import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userData } from './userData';
import React, { useState } from 'react';
const GameButtons = () => {
  const [resources, setResources] = useState(userData.resources);
  const handleClick = () => {
    setResources(resources.resources + 1);
  };
  return (
    <div className="gameButtons w-auto h-full">
      <button className="btn" onClick={handleClick}>
        Click
      </button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
      <button className="btn">Click</button>
    </div>
  );
};

export default GameButtons;
