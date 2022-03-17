import Layout from '../components/Layout';
import { useEffect, useContext } from 'react';
import ResourceContext from '../components/ResourceContext';

export default function Resources() {
  const resourceContext = useContext(ResourceContext);
  const handleClick = () => {
    setResourceCount({
      count: resourceCount.count + 1,
      startCounter: true
    });
  };
  return (
    <Layout>
      <p className="text-xl font-bold">Test Resource Counter</p>
      <p className="text-xl">{resourceContext.count}</p>
      <div id="resourceControls">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick()}
        >
          Start Counter
        </button>
      </div>
    </Layout>
  );
}
