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
    <div className='bg-[#1a1a1a] text-white py-20' id='experience'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <h1 className='font-extrabold text-3xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          EXPERIENCES
        </h1>
        <div className='flex flex-wrap justify-center'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className='bg-blackish rounded-lg shadow-lg p-6 m-4 w-full md:w-2/3 lg:w-64 transition-transform transform hover:scale-105'
            >
              <div className='flex items-center mb-4'>
                <span className='text-4xl mr-2'>{experience.icon}</span>
                <h2 className='text-2xl text-yellow-400 font-bold'>{experience.name}</h2>
              </div>
              <p className='text-base mb-4 font-sans font-light text-gray-300'>{experience.description}</p>
              <p className='text-base bg-yellow-400 font-bold py-1 px-2 rounded text-blackish'>
                {experience.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;