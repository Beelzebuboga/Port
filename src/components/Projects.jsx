import React from 'react';

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

  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='projects'>
      <div className='container mx-auto px-8 mt-40 md:px-16 lg:px-24'>
        <div className='font-extrabold text-6xl lg:text-8xl font-sans text-yellow-300 text-center mb-8'>
          PROJECTS
        </div>
        <div className='overflow-x-auto'>
          <div className='flex space-x-4'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-gray-800 text-white rounded shadow-lg p-4 w-64 transition-transform transform hover:scale-105 hover:shadow-2xl'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='rounded-t-lg w-full h-40 object-cover'
                />
                <h3 className='text-lg font-bold mt-2'>{project.title}</h3>
                <p className='text-sm text-gray-400'>{project.description}</p>
                <a
                  href={project.link}
                  className='text-yellow-300 underline mt-2 block'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;