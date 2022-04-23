import React, { useContext } from 'react';

const Resources = (props) => {
  let { resources } = props.userData;
  return (
    <div>
      <div className="text-2xl">Resources</div>
      <div className="text-2xl">{resources}</div>
    </div>
  );
};

export default Resources;
