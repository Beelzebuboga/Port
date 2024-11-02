import React from 'react';
import Honbu from '../assets/Photos/msukcpage.png'

const Projects = () => {
  // Sample projects data with images
  const projects = [
    {
      title: 'MSUKC Honbu Dojo Website',
      description: 'A website for an organization.',
      link: 'http://127.0.0.1:5500/index.html',
      image: Honbu,
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

  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h1 className='font-extrabold text-3xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          PROJECTS
        </h1>

        <div className='flex flex-wrap justify-center'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-blackish rounded-lg shadow-lg p-4 m-4 w-full md:w-96 lg:w-1/4 transition-transform transform hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.title}
                className='rounded-t-lg object-cover w-full'
              />

              <div className='p-4'>
                <h3 className='text-xl mb-2 text-yellow-400 font-bold'>{project.title}</h3>
                <p className='text-base mb-4 font-sans font-light text-white'>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className='bg-yellow-400 text-[#1a1a1a] rounded-lg hover:bg-yellow-300 transition duration-300 border-2 border-yellow-400 px-4 py-1'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;