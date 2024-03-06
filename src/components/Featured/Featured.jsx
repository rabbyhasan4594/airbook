import React from 'react';

const Featured = () => {
    return (
        <div className=' lg:mt-24 mt-4 '>
            <div className='lg:px-32 px-2'>
<h1 className='text-3xl font-semibold lg:mb-20  mb-4'>Featured Destinations</h1>
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
<div className='  rounded-lg bg-white'>
   <div className='p-2'>
   <img src="https://i.ibb.co/7nqBHKD/1.jpg" className='rounded-lg' alt="" />
   </div>
   <h3 className='ps-2 font-bold text-lg mt-4 mb-4'>Stopover opportunity in Istanbul with Turkish Airlines</h3>
   <div className='text-center mb-4'>
   <button className='rounded-lg bg-amber-400 py-2 px-8  text-base font-medium'>View More</button>
   </div>
</div>
<div className='  rounded-lg bg-white'>
   <div className='p-2'>
   <img src="https://i.ibb.co/7nqBHKD/1.jpg" className='rounded-lg' alt="" />
   </div>
   <h3 className='ps-2 font-bold text-lg mt-4 mb-4'>Discover the timeless city with Touristanbul of Turkish Airlines</h3>
   <div className='text-center mb-4'>
   <button className='rounded-lg bg-amber-400 py-2 px-8  text-base font-medium'>View More</button>
   </div>
</div>
<div className='  rounded-lg bg-white'>
   <div className='p-2'>
   <img src="https://i.ibb.co/7nqBHKD/1.jpg" className='rounded-lg' alt="" />
   </div>
   <h3 className='ps-2 font-bold text-lg mt-4 mb-4'>the best of Abu Dhabi with exclusive Etihad Airways!</h3>
   <div className='text-center mb-4 '>
   <button className='rounded-lg bg-amber-400 py-2 px-8  text-base font-medium'>View More</button>
   </div>
</div>


</div>
            </div>
        </div>
    );
};

export default Featured;