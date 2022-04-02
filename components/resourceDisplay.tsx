import React, { useContext } from 'react';
import { useAppContext } from '../pages/_app';
const Resources = () => {
  const user = useAppContext();
  console.log(user[1]);
  return (
    <div>
      <div className="text-2xl">Resources</div>
      <div>{user[0].resources}</div>
    </div>
  );
};

export default Resources;
