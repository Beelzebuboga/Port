import React from 'react';
import AboutImage from '../assets/Photos/photo.jpg'; // Ensure the path is correct
import htmlLogo from '../assets/Photos/html.png'; // Ensure this path is correct
import cssLogo from '../assets/Photos/css.png'; // Ensure this path is correct
import jsLogo from '../assets/Photos/javascript.png'; // Ensure this path is correct
import reactLogo from '../assets/Photos/react.png'; // Ensure this path is correct
import tailwindLogo from '../assets/Photos/tailwindcss.png'; // Ensure this path is correct
import cppLogo from '../assets/Photos/cpp.png'; // Ensure this path is correct
import githubLogo from '../assets/Photos/github.png'; // Ensure this path is correct
import pythonLogo from '../assets/Photos/python.png'; // Ensure this path is correct
import bootstrapLogo from '../assets/Photos/bootstrap.png'; // Ensure this path is correct

const About = () => {
  return (
    <div className='bg-blackish text-white py-20' id='about'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <div className='flex flex-col gap-12 md:flex-row items-start md:space-x-16 mt-12 lg:mt-20'>
          {/* Left Side: About Me */}
          <div className='flex-1 mb-8 md:mb-0'>
          <h1 className='font-extrabold text-3xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          ABOUT ME
        </h1>
            <p className='mb-4 text-center text-base lg:text-left md:text-lg leading-relaxed'>
              I am a skilled full-stack developer who has taught myself to build web applications using HTML, CSS, and JavaScript. I specialize in popular frameworks like React and Bootstrap. I am also proficient in languages like Python and C++. 
              What started as a hobby has become a driving force in my life, motivating me to constantly learn and grow as a developer. I am dedicated to delivering high-quality work, collaborating effectively, and meeting project deadlines. Let us work together to see how my skills can benefit your projects!
            </p>
          </div>

          {/* Right Side: Skills */}
          <div className='flex-1'>
          <h1 className='font-extrabold text-3xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          SKILLS
        </h1>
            <div className='flex flex-wrap justify-center md:justify-start mt-4'>
              {[
                { src: htmlLogo, alt: 'HTML' },
                { src: cssLogo, alt: 'CSS' },
                { src: jsLogo, alt: 'JavaScript' },
                { src: reactLogo, alt: 'React' },
                { src: tailwindLogo, alt: 'Tailwind CSS' },
                { src: cppLogo, alt: 'C++' },
                { src: githubLogo, alt: 'GitHub' },
                { src: pythonLogo, alt: 'Python' },
                { src: bootstrapLogo, alt: 'Bootstrap' },
              ].map((logo, index) => (
                <div key={index} className='p-2 rounded-lg flex border-2 border-yellow-400 items-center justify-center m-2 hover:bg-gray-800 transition duration-300'>
                  <img src={logo.src} alt={logo.alt} className='h-16 w-16 md:h-20 md:w-20' />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-10 text-center bg-yellow-400 p-4 lg:p-6 rounded-lg shadow-lg">
          <h3 className='text-2xl mb-4 text-gray-900 font-bold'>Let’s Build Something Amazing Together!</h3>
          <p className='text-base text-gray-900'>
            I’m always open to new projects and collaborations. Let’s connect and create something extraordinary!
          </p>
          <a href="#contact">
            <button className='mt-4 bg-gray-900 text-yellow-400 font-bold py-2 px-4 rounded hover:bg-yellow-500 hover:text-gray-900 transition duration-300'>
              Get in Touch
            </button>
          </a>
        </div>
      </div>
 </div>
  );
}

export default About;