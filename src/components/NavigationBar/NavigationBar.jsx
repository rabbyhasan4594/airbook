import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='lg:mx-6 mx-2'>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start lg:ps-28">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={"/blog"}>Blog</NavLink></li>
    <li><NavLink to={"/offer"}>Offer</NavLink></li>
    <li><NavLink to={"/airlines"}>Airlines</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
      </ul>
    </div>
    <NavLink to={"/"} className=""><img src="https://i.ibb.co/Q9PTqZB/LOGO.png" alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
    <li><NavLink to={"/blog"}>Blog</NavLink></li>
    <li><NavLink to={"/offer"}>Offer</NavLink></li>
    <li><NavLink to={"/airlines"}>Airlines</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
       
    </ul>
  </div>
  <div className="navbar-end lg:pr-28">
    <a className="px-4 py-1 rounded-md bg-blue-500 text-white">Sign in</a>
  </div>
</div>
        </div>
    );
};

export default NavigationBar;