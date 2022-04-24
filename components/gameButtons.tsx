import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { userData, setUserData, startResourceSystem } = props;
  return (
    <>
      <div className="gameButtons w-auto h-full flex flex-col">
        Welcome {userData.userName}!
        <div>
          <button
            className="btn"
            onClick={() =>
              setUserData({
                ...userData,
                resources: userData.resources + userData.resourcesPerTick
              })
            }
          >
            Increase Resources
          </button>
        </div>
        <div>
          {userData.resources > 10 && (
            <button className="btn" onClick={() => startResourceSystem()}>
              {userData.mining ? 'Pause AI Miner' : 'Install AI Miner'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GameButtons;
