import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Sample projects data with images
  const projects = [
    {
      title: 'MSUKC Honbu Dojo Website',
      description: 'A website for an organization.',
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
      <div className='container mx-auto px-8  md:px-16 lg:px-24'>
        <div className='font-extrabold text-2xl lg:text-5xl font-sans text-yellow-400 text-center mb-8'>
          PROJECTS
        </div>
        
        <div className='flex flex-wrap justify-center'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-blackish rounded shadow-lg p-8 m-4 w-full lg:h-96 md:w-1/3 lg:w-1/4 h-96'>
              <span className='text-2xl mb-4 text-yellow-400 font-bold py-2'>{project.title}</span>
              <p className='text-base mb-10 font-sans font-light text-white lg:mt-5 lg:text-pretty'>{project.description}</p>
              <button className=' text-yellow-400  rounded-lg hover:bg-blackish hover:text-white transition duration-300 border-2 border-yellow-400 px-4 py-1'>
              Demo
            </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
     