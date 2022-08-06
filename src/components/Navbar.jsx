import React from 'react';

const Navbar = ({toggle}) => {
  


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white position-absolute'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NFTGo</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'><a href="/About">About</a></li>
        <li className='p-4'><a href="/Skills">Skills</a></li>
        <li className='p-4'><a href="/Works">Works</a></li>
        <li className='p-4'><a href="/Courses">Courses</a></li>
        <li className='p-4' ><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
