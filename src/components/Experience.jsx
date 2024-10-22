import React from 'react';
import Projects from './Projects';

const Experience = () => {
  // Sample experiences with additional details
  const experiences = [
    {
      name: 'Web Development',
      description: 'Building scalable and responsive web applications',
      icon: '💻',
      duration: '2018-2020',
    },
    {
      name: 'Mobile App Development',
      description: 'Creating engaging mobile apps for Android and iOS',
      icon: '📱',
      duration: '2020-2022',
    },
    {
      name: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces',
      icon: '🎨',
      duration: '2015-2018',
    },
    {
      name: 'Data Science',
      description: 'Analyzing and interpreting complex data to drive insights',
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
              className='bg-yellow-400 rounded shadow-lg p-8 m-4 w-full md:w-1/2 lg:w-1/3'
            >
              <div className='flex items-center mb-4'>
                <span className='text-2xl mr-2 mb-4'>{experience.icon}</span>
                <h2 className='text-2xl mb-4 text-[#1a1a1a] font-bold'>{experience.name}</h2>
              </div>
              <p className='text-base font-sans font-light text-[#1a1a1a]'>{experience.description}</p>
              <p className='text-base bg-blackish font-bold text-center md:py-2 md:px-2 md:mt-20 py-1 px-1 text-yellow-400 mt-4'>{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;