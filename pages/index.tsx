import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-6 h-screen'>
      <div className=""></div>
      <div className="row-span-4">
        <div className="grid grid-cols-8 grid-rows-1 h-full">
          <div className=""></div>
          <div className="col-span-6"></div>
          <div className=""></div>
        </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Home
