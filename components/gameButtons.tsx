import React, { useEffect, useState } from 'react';

const GameButtons = (props) => {
  let { startResourceSystem } = props.resourcesState;
  let { resourcesState } = props.resourcesState;
  let {setResourcesState} = props.setResourcesState;
  console.log(props);
  return (
    <div className="gameButtons w-auto h-full flex">
      <div>
        <button className="btn" onClick={() => setResourcesState({ 
          ...resourcesState,
          resources: resourcesState.resources + resourcesState.resourcesPerTick
        })}>
          Increase Resources
        </button>
      </div>
      <div className="px-2">
        {resourcesState.resources > 10 && (
          <button className="btn" onClick={() => startResourceSystem()}>Install AI Miner</button>
        )}
      </div>
    </div>
  );
};

export default GameButtons;
