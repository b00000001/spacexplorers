import React, { useContext } from 'react';

const Resources = (props) => {
  let { amount } = props.userData.resources.minerals;
  return (
    <div>
      <div className="text-2xl">Resources</div>
      <div className="text-2xl">{amount}</div>
    </div>
  );
};

export default Resources;
