import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-[#1a1a1a] text-white px-8 md:px-16 lg:px-24 shadow-lg'>
      <div className='flex justify-center py-4 mx-auto items-center'>
        <div className="burger md:hidden block">
          <div className="button">
            {/* dropdown */}
            <input type="button" value="Menu" />
          </div>
        </div>
        <div className='space-x-6 md:block hidden'>
          <a href="#home" className='hover:text-yellow-400 font-sans text-md transition duration-300'>Home</a>
          <a href="#about" className='hover:text-yellow-400 font-sans text-md transition duration-300'>About Me</a>
          <a href="#experience" className='hover:text-yellow-400 font-sans text-md transition duration-300'>Experience</a>
          <a href="#projects" className='hover:text-yellow-400 font-sans text-md transition duration-300'>Projects</a>
          <a href="#contact" className='hover:text-yellow-400 font-sans text-md transition duration-300'>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;