import type { NextPage } from 'next';
import CurrentTime from '../components/currentTime';
import Header from '../components/header';
import GameButtons from '../components/gameButtons';
import Resources from '../components/resourceDisplay';
import Main from '../components/main';
const Home: NextPage = (props) => {
  let { userData } = props;
  let { setUserData } = props;
  let { startResourceSystem } = props;
  return (
    <div className="text-gray-300 bg-gray-900 grid grid-cols-1 grid-rows-6 h-screen">
      <div className="h-100">
        <Header />
      </div>
      <div className="row-span-4">
        <div className="grid grid-cols-8 grid-rows-1 h-full">
          <div>
            <Resources userData={userData} />
          </div>
          <div className="col-span-6 text-2xl flex justify-start flex-col">
            <div className="py-2 h-1/4 w-1/2">
              <Main
                userData={userData}
                setUserData={setUserData}
                startResourceSystem={startResourceSystem}
              />
            </div>
          </div>
          <div className="">
            <CurrentTime />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
