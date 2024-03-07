import React from 'react';

const Subscribe = () => {
    return (
        <div className='lg:px-32 lg:mb-40 mb-4'>
            <div className='flex justify-between items-center pt-24 '>
                <div className='lg:pb-5'>
                    <img src="https://i.ibb.co/Sn2KsyB/Isolation-Mode.png" alt="" className='w-[386px] h-[394px]'/></div>
                <div className=''>
                    <h1 className='text-4xl font-bold lg:w-2/3'>Subscribe to our
                        Newsletter!</h1>
                    <p className='text-xl font-medium lg:2/3 text-blue-500 my-3'>Subscribe to our newsletter and stay
                    </p>
                    <div className='mb-2'>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                    <button className='w-full py-2 text-xl font-medium bg-yellow-500 rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;