import React, { useEffect, useState } from 'react';
import { Resources, CalculateResources } from './userData';

const GameButtons = (props) => {
  let { userData, setUserData, startResourceSystem } = props;
  let playerResources = new Resources(userData, setUserData);
  let resourceCalculator = new CalculateResources(userData, setUserData);

  return (
    <>
      <div className="gameButtons w-auto h-full flex flex-col">
        Welcome {userData.userName}!
        <div className="border border-2 flex">
          <div className="buttonsLeft w-full">
            <div>
              <button
                className="btn"
                onClick={() => playerResources.increaseResources()}
              >
                Increase Resources
              </button>
            </div>
            <div>
              {userData.resources.minerals.amount > parseFloat('1.0') ? (
                <button
                  className="btn"
                  onClick={() => resourceCalculator.spendResources('aiMiner')}
                >
                  Decrease Resources
                </button>
              ) : null}
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
          <div className="buttonsRight w-full border border-2">
            <button className="btn">test</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameButtons;
