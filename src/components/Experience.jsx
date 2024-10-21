import React from 'react';

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
      <div className='container mx-auto px-8 mt-40 md:px-16 lg:px-24'>
        <div className='font-extrabold text-6xl lg:text-8xl font-sans text-yellow-300 text-center mb-8'>
          EXPERIENCES
        </div>
        <div className='flex flex-wrap justify-center'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className='bg-yellow-400 text-white rounded shadow-lg p-8 m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
            >
              <div className='flex items-center mb-4'>
                <span className='mr-2'>{experience.icon}</span>
                <h2 className='text-lg'>{experience.name}</h2>
              </div>
              <p className='text-sm text-gray-400'>{experience.description}</p>
              <p className='text-sm text-gray-400 mt-4'>{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;