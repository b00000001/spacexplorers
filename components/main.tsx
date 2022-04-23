import GameButtons from './gameButtons';
import SignUp from './signupForm';
const Main = (props) => {
  let { userData } = props;
  let { setUserData } = props;
  let { startResourceSystem } = props;
  console.log(userData.userName);
  if (userData.userName === '') {
    return <SignUp userData={userData} setUserData={setUserData} />;
  } else {
    return (
      <div>
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
