import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { userData, setUserData, startResourceSystem } = props;
  return (
    <>
      <div className="gameButtons w-auto h-full flex">
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
        <div className="px-2">
          {userData.resources > 10 && (
            <button className="btn" onClick={() => startResourceSystem()}>
              Install AI Miner
            </button>
          )}
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default GameButtons;
