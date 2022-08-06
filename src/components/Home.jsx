import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Navbar from './Navbar';
import BG from '../assets/Videobackg.mp4'

const Home = () => {
  return (
    <div >
        <video src={BG} autoPlay loop muted ></video>
        <div name='home' className='w-full h-screen home'>
        
      {/* Container */}
      <div className='content d-flex flex-col justify-center h-full'>
        <div className="mt-[-10rem] mb-[2rem]">
        <Navbar/>
        </div>
      <div className='max-w-[1000px] mx-auto px-8 mt-[7rem] '>
        <p className='text-[#3c5964]'>Hi, my name is</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#293d43]'>
          Joekin Roche
        </h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#3c5964]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#3c5964] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
