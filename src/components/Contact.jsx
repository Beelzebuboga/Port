import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import HeroImage from '../assets/Photos/photo.jpg';

const Contact = () => {
  return (
    <div className='bg-blackish py-20' id='contact'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
      <h1 className='font-extrabold text-3xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>
          CONTACT US
        </h1>

        <div className='flex flex-col md:flex-row justify-center md:justify-between gap-8'>
          {/* Left Card with Image and Social Media Links */}
          <div className='lg:w-1/3 w-full'>
            <div className='bg-blackish shadow-lg rounded-lg overflow-hidden'>
              {/* Image Section */}
              <img 
                src={HeroImage} // Ensure the path is correct
                alt="Profile" 
                className="w-full h-60 mt-20 object-cover" 
              />
              
              {/* Content Section */}
              <div className='p-6'>
                <h2 className='text-yellow-400 text-3xl font-bold'>Abdul-khaliq R. Solaiman</h2>
                <p className='text-gray-300 mt-2'>Web Developer</p>
                <p className='text-gray-300 mt-2'>abdulkhaliqsolaiman@gmail.com</p>
                <p className='text-gray-300 mt-2'>+63 950-282-4049</p>
                
                {/* Social Media Icons */}
                <div className='flex space-x-4 mt-4 justify-center md:justify-start'>
                  <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook className='text-yellow-400 hover:text-white transition duration-300 text-3xl' />
                  </a>
                  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter className='text-yellow-400 hover:text-white transition duration-300 text-3xl' />
                  </a>
                  <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='text-yellow-400 hover:text-white transition duration-300 text-3xl' />
                  </a>
                  <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram className='text-yellow-400 hover:text-white transition duration-300 text-3xl' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className='lg:w-1/3 w-full bg-blackish rounded-lg shadow-lg p-6'>
            <h2 className='text-yellow-400 font-bold text-2xl mb-4'>Get in Touch</h2>
            <div className='mb-4'> 
              <label className='text-yellow-400 font-bold text-lg'>Full Name</label>
              <input type="text" placeholder="e.g., Abdul-khaliq Solaiman" className="input input-bordered input-warning bg-blackish text-white w-full mb-2 p-2 rounded" />
            </div>
            <div className='mb-4'> 
              <label className='text-yellow-400 font-bold text-lg'>Email Address</label>
              <input type="email" placeholder="e.g., abdulkhaliq@example.com" className="input input-bordered input-warning bg-blackish text-white w-full mb-2 p-2 rounded" />
            </div>
            <div className='mb-4'> 
              <label className='text-yellow-400 font-bold text-lg'>Contact Number</label>
              <input type="tel" placeholder="e.g., +123 456 7890" className="input input-bordered input-warning bg-blackish text-white w-full mb-2 p-2 rounded" />
            </div>
            <div className='mb-4'> 
              <label className='text-yellow-400 font-bold text-lg'>Suggestions and Comments</label>
              <textarea placeholder="Share your thoughts or feedback here..." className="input input-bordered input-warning h-28 mt-2 bg-blackish text-white w-full mb-4 p-2 rounded" required></textarea>
            </div>
            <div> 
              <button className='bg-yellow-400 text-blackish font-bold rounded-lg hover:bg-yellow-500 transition duration-300 border-2 border-yellow-400 px-6 py-2'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;