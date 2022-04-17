import React, { useContext } from 'react';

const Resources = (props: { userData }) => {
  let {resources} = props.userData.userData;
  console.log(resources);
  return (
    <div>
      <div className="text-2xl">Resources</div>
      <div className="text-xl">{resources}</div>
    </div>
  );
};

export default Resources;
