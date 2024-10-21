import React from 'react';
import HeroImage from '../assets/Photos/photo.jpg';

const Hero = () => {
  return (
    <div className='bg-[#1a1a1a] py-10 relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-center mt-10'>
        {/* Text Section */}
        <div className='text-center lg:text-left lg:w-2/3 lg:ml-52 lg:mb-40'>
          <h1 className='text-5xl lg:text-5xl mt-6 lg:mt-40  text-white'>
            <span className='font-extrabold text-6xl lg:text-8xl font-sans text-yellow-300'>
              ABDUL-KHALIQ<br />
              RANAO SOLAIMAN
            </span><br />
            <span className='text-lg lg:text-xl text-white font-light'>FRONT-END DEVELOPER</span>
          </h1>
          <p className='mt-4 text-yellow-200 font-sans text-base lg:text-lg'>
            "You don't have to be great to start, but you have to start to be great."
          </p>

          <div className='mt-8 flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-6'>
            <button className='bg-yellow-400 text-{#1a1a1a} font-bold py-2 px-4 rounded hover:bg-blackish hover:text-white transition duration-300l'>
              Let us Connect!
            </button>
            <button className='bg-yellow-400 text-{#1a1a1a} font-bold py-2 px-4 rounded hover:bg-blackish hover:text-white transition duration-300'>
              View My Resume
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='mt-10 lg:mt-32 lg:w-1/2 flex justify-center'>
          <img 
            src={HeroImage} 
            alt='Abdul-khaliq R. Solaiman' 
            className='h-64 w-64 lg:h-96 lg:w-96 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 border-4 border-yellow-300 lg:mr-52 shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;