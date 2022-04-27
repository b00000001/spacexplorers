import React, { useContext } from 'react';

const Resources = (props) => {
  let { amount } = props.userData.resources.minerals;
  return (
    <div>
      <div className="xl:text-2xl lg:text-xl">Resources</div>
      <div className="xl:text-2xl lg:text-lg flex items-center">
        {amount.toFixed(4)}
        <p className="text-sm ml-2">/m</p>
      </div>
    </div>
  );
};

export default Resources;
