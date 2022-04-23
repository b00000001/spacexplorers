import GameButtons from './gameButtons';
const Main = (props) => {
  let { userData } = props;
  let { setUserData } = props;
  let { startResourceSystem } = props;
  return (
    <>
      <div>Main</div>
      <GameButtons
        userData={userData}
        setUserData={setUserData}
        startResourceSystem={startResourceSystem}
      />
    </>
  );
};

export default Main;
