import React from 'react'


const Contact = () => {
  return (
    <div className='bg-blackish py-20'>
        <div className='container mx-auto px-8  md:px-16 lg:px-24'>
          <div className='font-extrabold text-2xl lg:text-5xl font-sans text-yellow-300 text-center mb-8'>CONTACTS</div>

            <form className='border-2 border-yellow-400 lg:w-1/3 rounded-lg'>
              <div className='text-2xl mb-4 px-6 py-4'> 
                <h1 className='text-yellow-400 font-bold text-lg'>Full name</h1>
                <input type="text" name="" id="" className='border-2 border-white text-base   text-white bg-blackish rounded-lg' />
              </div>
              <div className='text-2xl mb-4 px-6 py-4'> 
                <h1 className='text-yellow-400 font-bold text-lg'>Email Address</h1>
                <input type="text" name="" id="" className='border-2 border-white text-base   text-white bg-blackish rounded-lg' />
              </div>
              <div className='text-2xl mb-4 px-6 py-4'> 
                <h1 className='text-yellow-400 font-bold text-lg'>Contact Number</h1>
                <input type="text" name="" id="" className='border-2 border-white text-base   text-white bg-blackish rounded-lg' />
              </div>
              <div className='text-2xl mb-4 px-6 py-4'> 
                <h1 className='text-yellow-400 font-bold text-lg'>Suggestion and Comments</h1>
                <input type="text" name="" id="" className='border-2 border-white text-base  h-32 text-white bg-blackish rounded-lg' />
              </div>
              <div className='px-6 py-4'> 
              <button className=' text-yellow-400  rounded-lg hover:bg-blackish hover:text-white transition duration-300 border-2 border-white px-4 py-1'>
              Send
            </button>
            </div>
          </form>
      </div>
   </div>
  )
}

export default Contact