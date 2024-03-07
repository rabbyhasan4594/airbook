import { MapIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Footer = () => {
    return (
       <div className='bg-blue-500 pb-8  '>
         <footer className="footer py-10  text-white lg:ps-32 px-2">
           <nav>
           <h6 className=" text-lg font-medium">Address</h6>
           <h6 className=" text-base font-normal lg:w-1/2">House- 75 Ka, Main Rd, Dhaka 1216</h6>
           <div className=" text-base font-normal flex gap-1">
            <p><MapPinIcon className="h-5 w-5 " /></p>

           <p>View on Maps</p></div>
           
           </nav>
            <nav>

                <a className="link link-hover text-lg font-medium">About us</a>
                <a className="link link-hover text-lg font-medium">Stories</a>
                <a className="link link-hover text-lg font-medium">Blog</a>
                <a className="link link-hover text-lg font-medium">Airlines</a>
                <a className="link link-hover text-lg font-medium">Testimonials</a>

            </nav>
            <nav>
                <a className="link link-hover text-lg font-medium">Join us</a>
                <a className="link link-hover text-lg font-medium">Terms of Service</a>
                <a className="link link-hover text-lg font-medium">Privacy Policy</a>
                <a className="link link-hover text-lg font-medium">Support</a>

            </nav>
            <nav>
            <a className="link link-hover text-lg font-medium">Contact</a>
                <a className="link link-hover">+880 1234562890
                </a>
                <a className="link link-hover">+880 1345628980
                </a>
                <a className="link link-hover">+880 1234562890</a>
                <a className="link link-hover">info@airbook.com</a>
            </nav>
            <div className=''>

            </div>
        </footer>
        <div className=' lg:ps-32 lg:pr-44'>
<div className='pb-8 border-t-2 border-white'>

</div>
<footer className="footer   text-base-content  ">
  <aside className="items-center grid-flow-col ">
   
    <img src="https://i.ibb.co/wKgmff7/LOGO-white.png" alt="" />
  </aside> 
  <nav>
    <p className='pt-3 text-white'>© Copyright  AIRBOOK</p>
  </nav>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 text-white">
      <a className='text-white'><svg  xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
<div>
   
</div>
        </div>
       </div>
    );
};

export default Footer;