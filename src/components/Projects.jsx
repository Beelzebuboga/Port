import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Sample projects data with images
  const projects = [
    {
      title: 'Project One',
      description: 'A web application for managing tasks.',
      link: 'https://example.com/project-one',
      image: 'https://via.placeholder.com/300x200?text=Project+One',
    },
    {
      title: 'Project Two',
      description: 'A mobile app for tracking fitness activities.',
      link: 'https://example.com/project-two',
      image: 'https://via.placeholder.com/300x200?text=Project+Two',
    },
    {
      title: 'Project Three',
      description: 'An e-commerce site for selling products.',
      link: 'https://example.com/project-three',
      image: 'https://via.placeholder.com/300x200?text=Project+Three',
    },
    {
      title: 'Project Four',
      description: 'A data visualization tool for analyzing datasets.',
      link: 'https://example.com/project-four',
      image: 'https://via.placeholder.com/300x200?text=Project+Four',
    },
    {
      title: 'Project Five',
      description: 'A portfolio website to showcase my work.',
      link: 'https://example.com/project-five',
      image: 'https://via.placeholder.com/300x200?text=Project+Five',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

 
  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='about'>
      <div className='container mx-auto px-8 mt-40 md:px-16 lg:px-24'>
        <div className='font-extrabold text-6xl lg:text-8xl font-sans text-yellow-300 text-center mb-8'>
          PROJECTS
        </div>
        
        <div className='flex justify-center md:h-96'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-yellow-400 text-white rounded shadow-lg p-8 m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
            >
              <div className='flex items-center mb-4'>
                <img src="" alt="" />{project.image}
                <span className='mr-2'>{project.icon}</span>
                <h2 className='text-lg'>{project.name}</h2>
              </div>
              <p className='text-sm text-gray-400'>{project.description}</p>
              <p className='text-sm text-gray-400 mt-4'>{project.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
     