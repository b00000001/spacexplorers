import React, { useState } from 'react';
const SignUp = (props) => {
  let { setUserData } = props;
  const [userLenTracker, setUserLenTracker] = useState('');
  const handleChange = (e) => {
    setUserLenTracker(e.target.value);
  };
  const startGame = () => {
    setUserData({
      ...props.userData,
      userName: userLenTracker
    });
  };
  return (
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">What is your name?</span>
        <span class="label-text-alt">Alt label</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        onChange={handleChange}
        class="input input-bordered w-full max-w-xs"
      />
      {userLenTracker === '' ? null : (
        <button class="btn button-primary" onClick={startGame}>
          Start
        </button>
      )}
    </div>
  );
};

export default SignUp;
