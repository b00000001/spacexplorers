import React, { useEffect, useState } from 'react';
import {Resources} from './userData';

const GameButtons = (props) => {
  let { userData, setUserData, startResourceSystem } = props;
  let playerResources = new Resources(userData, setUserData);
  playerResources.displayProps();
  return (
    <>
      <div className="gameButtons w-auto h-full flex flex-col">
        Welcome {userData.userName}!
        <div>
          <button
            className="btn"
            onClick={() =>
              playerResources.increaseResources()
              }
          >
            Increase Resources
          </button>
        </div>
        <div>
          {userData.resources >= 10 && (
            <button className="btn" onClick={() => startResourceSystem()}>
              {userData.mining ? 'Pause AI Miner' : 'Install AI Miner'}
            </button>
          )}
        </div>
        <div>
          {userData.resources >= 30 && (
            <button className="btn" onClick={() => startResourceSystem()}>
              Install Additional Miner
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GameButtons;
