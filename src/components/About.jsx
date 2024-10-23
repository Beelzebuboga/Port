import React from 'react';
import AboutImage from '../assets/Photos/photo.jpg'; // Ensure the path is correct
import htmlLogo from '../assets/Photos/html.png'; // Ensure this path is correct
import cssLogo from '../assets/Photos/css.png'; // Ensure this path is correct
import jsLogo from '../assets/Photos/javascript.png'; // Ensure this path is correct
import reactLogo from '../assets/Photos/react.png'; // Ensure this path is correct
import tailwindLogo from '../assets/Photos/tailwindcss.png'; // Ensure this path is correct
import cppLogo from '../assets/Photos/cpp.png'; // Ensure this path is correct
import githublogo from '../assets/Photos/github.png'
import phytonlogo from '../assets/Photos/python.png'
import bootstraplogo from '../assets/Photos/bootstrap.png'
const About = () => {
  return (
    <div className='bg-[#1a1a1a] text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col gap-18 md:flex-row items-start md:space-x-16 mt-12 lg:mt-20'>
          {/* Left Side: About Me */}
          <div className='flex-1 mb-8 md:mb-0'>
            <h3 className='font-extrabold text-2xl md:text-5xl lg:7xl font-sans text-yellow-300 text-center mb-8'>ABOUT ME</h3>
            <p className='mb-4 text-center text-base lg:text-left md:text-lg leading-relaxed'>
            I am a skilled full-stack developer who has taught myself to build web applications using HTML, CSS, and JavaScript. I specialize in popular frameworks like React, Bootstrap.  I am also proficient in languages like Python, C++. 
            What started as a hobby has become a driving force in my life, motivating me to constantly learn and grow as a developer. I am dedicated to delivering high-quality work, working well with others, and meeting project deadlines. Let us work together to see how my skills can benefit your projects!
            </p>
            
          </div>

          {/* Right Side: Skills */}
          <div className='flex-1'>
            <h3 className='font-extrabold text-2xl md:text-5xl font-sans text-yellow-300 text-center mb-8'>SKILLS</h3>
            <div className='flex flex-wrap justify-center md:justify-start mt-4'>
              {[
                { src: htmlLogo, alt: 'HTML' },
                { src: cssLogo, alt: 'CSS' },
                { src: jsLogo, alt: 'JavaScript' },
                { src: reactLogo, alt: 'React' },
                { src: tailwindLogo, alt: 'Tailwind CSS' },
                { src: cppLogo, alt: 'C++' },
                { src: githublogo, alt: 'Github' },
                { src: phytonlogo, alt: 'Phyton' },
                { src: bootstraplogo, alt: 'Bootstrap' },

              ].map((logo, index) => (
                <div key={index} className='p-2 rounded-lg flex border-2 border-yellow-400 items-center justify-center m-2'>
                  <img src={logo.src} alt={logo.alt} className='h-20 w-20' />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improved Call-to-Action Section */}
        <div className="mt-10 text-center bg-yellow-400 p-4 lg:p-6 rounded-lg shadow-lg">
          <h3 className='text-2xl mb-4 text-[#1a1a1a] font-bold'>Let’s Build Something Amazing Together!</h3>
          <p className='text-base text-[#1a1a1a]'>
            I’m always open to new projects and collaborations. Let’s connect and create something extraordinary!
          </p>
          <button className='mt-4 bg-[#1a1a1a] text-yellow-400 font-bold py-2 px-4 rounded hover:text-blackish hover:bg-white transition duration-300'>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;