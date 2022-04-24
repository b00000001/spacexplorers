import GameButtons from './gameButtons';
import SignUp from './signupForm';
import React, { useState } from 'react';

const Main = (props) => {
  let { userData } = props;
  let { setUserData } = props;
  let { startResourceSystem } = props;
  const [saveState, setSaveState] = useState(false);
  const saveGame = () => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setSaveState(true);
    setTimeout(() => {
        setSaveState(false);
    }, 3000);
  };
  if (userData.userName === '') {
    return <SignUp userData={userData} setUserData={setUserData} />;
  } else {
    return (
      <div>
        <button className="btn" onClick={saveGame}>
          Save Game
        </button>
        {saveState && (
          <div className="alert alert-success shadow-lg">
            <div className="text-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Game Saved</span>
            </div>
          </div>
        )}
        <input type="text" placeholder='test' value='Test' />
        <GameButtons
          userData={userData}
          setUserData={setUserData}
          startResourceSystem={startResourceSystem}
        />
      </div>
    );
  }
};

export default Main;
