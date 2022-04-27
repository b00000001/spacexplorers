import React, { useEffect, useState } from 'react';
import { Resources } from './userData';

const GameButtons = (props) => {
  let { userData, setUserData, startResourceSystem } = props;
  let playerResources = new Resources(userData, setUserData);
  return (
    <>
      <div className="gameButtons w-auto h-full flex flex-col">
        Welcome {userData.userName}!
        <div>
          <button
            className="btn"
            onClick={() => playerResources.increaseResources()}
          >
            Increase Resources
          </button>
        </div>
        <div>
          {userData.resources.minerals.amount >= 0.01 && (
            <button className="btn" onClick={() => startResourceSystem()}>
              {userData.mining.aiMiningUnlocked
                ? 'Pause AI Miner'
                : 'Install AI Miner'}
            </button>
          )}
        </div>
        <div>
          {userData.resources.minerals.amount >= 0.2 && (
            <button
              className="btn"
              onClick={() => playerResources.additionalMiner()}
            >
              Install Additional Miner
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GameButtons;
