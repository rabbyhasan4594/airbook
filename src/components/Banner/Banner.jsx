import { ExclamationCircleIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen h-[521px] bg-slate-600" style={{ backgroundImage: 'https://i.ibb.co/8MWhSNz/Untitled-6.jpg)' }}>
                <div className='lg:pt-[143px] pt-4'>
                    <div className="  lg:mx-32 my-auto ">
                        <div className=' '>
                            <h1 ><samp className='text-4xl font-medium text-white '>Welcome to</samp><samp> </samp>  <samp className='text-4xl font-bold text-blue-400'>AirBook</samp></h1>
                        </div>
<div className='bg-white rounded-lg'>
<div className='pt-6'>
<div className='grid lg:grid-cols-2 grid-cols-1  justify-between'>
<div className='gap-3 ps-4 flex mb-2 '>
    <button className='bg-slate-200 py-2 px-4 rounded-lg flex gap-2 font-medium'><span><UserCircleIcon className="h-6 w-6 " /></span> <samp className='font-semibold Round Trip'>One way</samp></button>
    <button className='bg-blue-600 py-2 px-4 rounded-lg flex gap-2 '><span><UserCircleIcon className="h-6 w-6 " /></span> <samp className='font-semibold text-white'>One way</samp></button>
</div>
<div className='gap-3 pr-4 flex lg:justify-end '>
<button className='bg-slate-100 py-2 px-4 rounded-lg'>One way</button>
    <button className='bg-blue-100 py-2 px-4 rounded-lg'>Round Trip</button>
</div>
</div>
</div>

{/* 2 */}

<div className='grid lg:grid-cols-12  lg:grid-flow-col grid-flow-rowZ gap-4 w-full  mt-4 items-center'>
                            <div className='lg:col-span-10 '>
                                <div className='grid grid-cols-4 gap-3 py-6 ps-4'>
                                    <div className='border-2 rounded-lg p-2'>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-sm font-semibold border-r-2 pr-2'>DAC</p>
                                            <div>
                                                <p className='text-sm font-medium'>Dhaka</p>
                                                <p className='text-xs'>Hazrat Shahjalal Internatio</p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className='border-2 rounded-lg p-2'>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-sm font-semibold border-r-2 pr-2'>DAC</p>
                                            <div>
                                                <p className='text-sm font-medium'>Dhaka</p>
                                                <p className='text-xs'>Hazrat Shahjalal Internatio</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-2 rounded-lg p-2'>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-sm font-semibold border-r-2 pr-2'>DAC</p>
                                            <div>
                                                <p className='text-sm font-medium'>Dhaka</p>
                                                <p className='text-xs'>Hazrat Shahjalal Internatio</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-2 rounded-lg p-2'>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-sm font-semibold border-r-2 pr-2'>DAC</p>
                                            <div>
                                                <p className='text-sm font-medium'>Dhaka</p>
                                                <p className='text-xs'>Hazrat Shahjalal Internatio</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='lg:col-span-2 border bg-yellow-400 rounded-lg lg:mx-4 ps-7 py-2 '>
                            <p><MagnifyingGlassIcon className="h-14 w-14 text-white " /></p>
                            </div>


                        </div>
</div>
                        
                      
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;