import React from 'react';

const Deals = () => {
    return (
        <div className='lg:mt-16 '>
            <div className='lg:mx-32 mx-2'> 
            <h3 className='text-3xl font-semibold '>Deals and Offers</h3>
            <div className='lg:pt-14 pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>

            <div className='flex items-center gap-4 bg-white pe-2 rounded-lg '>
    <div ><img src="https://i.ibb.co/fNCgSvQ/4.jpg" className='rounded-xl ' alt="" /></div>
    <div>
        <p className='text-xs font-medium'>With bkash payment only</p>
        <h6 className='font-semibold text-base text-blue-600'>up to 14% discount on the base fare of domestic flights</h6>
    </div>
</div>

<div className='flex items-center gap-4 bg-white pe-2 rounded-lg '>
    <div ><img src="https://i.ibb.co/dgTnNbp/5.jpg" className='rounded-xl ' alt="" /></div>
    <div>
        <p className='text-xs font-medium'>With bkash payment only</p>
        <h6 className='font-semibold text-base text-blue-600'>up to 14% discount on the base fare of domestic flights</h6>
    </div>
</div>


<div className='flex items-center gap-4 bg-white pe-2 rounded-lg '>
    <div ><img src="https://i.ibb.co/1qfSF7T/6.jpg" className='rounded-xl ' alt="" /></div>
    <div>
        <p className='text-xs font-medium'>With bkash payment only</p>
        <h6 className='font-semibold text-base text-blue-600'>up to 14% discount on the base fare of domestic flights</h6>
    </div>
</div>

            </div>
            </div>
           
        </div>
    );
};

export default Deals;