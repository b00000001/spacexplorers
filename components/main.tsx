import GameButtons from './gameButtons';
const Main = (props) => {
  let { resourcesState } = props;
  let { setResourcesState } = props;
  let { startResourceSystem } = props;
  return (
    <>
      <div>Main</div>
      <GameButtons
        resourcesState={resourcesState}
        setResourcesState={setResourcesState}
        startResourceSystem={startResourceSystem}
      />
    </>
  );
};

export default Main;
