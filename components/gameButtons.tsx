import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { resourcesState, setResourcesState, startResourceSystem } = props;
  return (
    <>
      <div className="gameButtons w-auto h-full flex">
        <div>
          <button
            className="btn"
            onClick={() =>
              setResourcesState({
                ...resourcesState,
                resources:
                  resourcesState.resources + resourcesState.resourcesPerTick
              })
            }
          >
            Increase Resources
          </button>
        </div>
        <div className="px-2">
          {resourcesState.resources > 10 && (
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
