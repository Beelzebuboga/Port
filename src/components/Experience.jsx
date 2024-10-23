import React from 'react';
import Projects from './Projects';

const Experience = () => {
  // Sample experiences with additional details
  const experiences = [
    {
      name: 'Web Development',
      description: 'Building scalable and responsive web applications',
      icon: '💻',
      duration: '2023-2024',
    },
    {
      name: 'Mobile App Development',
      description: 'Creating engaging mobile apps for Android and iOS',
      icon: '📱',
      duration: '2020-2022',
    },

    {
      name: 'Data Science/Analyst',
      description: 'Analyzing and interpreting complex data',
      icon: '📊',
      duration: '2012-2015',
    },
    {
      name: 'Project Management',
      description: 'Leading projects from conception to delivery',
      icon: '📈',
      duration: '2010-2012',
    },
  ];

  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='about'>
      <div className='container mx-auto px-8 mt-16 md:px-16 lg:px-24'>
        <div className='font-extrabold text-2xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          EXPERIENCES
        </div>
        <div className='flex flex-wrap justify-center'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className='bg-blackish rounded shadow-lg p-8 m-4 w-full md:w-2/3 lg:w-64'
            >
              <div className='flex items-center mb-4'>
                
                <h2 className='text-2xl mb-4 text-yellow-400 font-bold py-2'>{experience.name}</h2>
                
              </div>
              <p className='text-base mb-10 font-sans font-light text-white lg:mt-5 lg:text-pretty'>{experience.description}</p>
              <p className='text-base bg-blackish font-bold md:py-2 py-1 px-1 text-yellow-400 lg:align-bottom'>{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;