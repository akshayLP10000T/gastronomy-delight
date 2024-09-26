import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`${isOpen ? 'flex right-0' : 'hidden -right-[100%]'} transition-all ease-in-out duration-300 z-[999] md:hidden absolute w-[50vw] h-screen bg-[#000000a5] top-0 py-5 px-2`}>
        <ul className='flex flex-col md:flex-row gap-2 text-white uppercase font-bold tracking-tighter'>
            <li onClick={toggleMenu}><FaTimes className="text-white w-8 h-8" /></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#">Home</a></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#about">About Us</a></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#features">Features</a></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#reserve">Reserve a seat</a></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#gallery">Gallery</a></li>
            <li className='cursor-pointer navbar-item text-sm'><a href="#contact">Contact</a></li>
          </ul>
      </div>
      <div className='z-[990] w-full flex items-center justify-between py-2 px-8 shadow-md fixed bg-[#00000094]'>
        <div>
          <img src="./logo.jpeg" alt="img" className='navbar-item w-20 h-20 rounded-full border-2 border-[#C0392B]' />
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <p></p> : <FaBars className="text-white w-8 h-8" />}
        </div>
        <div className={`gap-5 md:flex hidden`}>
          <ul className='flex flex-col md:flex-row gap-5 text-white uppercase font-bold tracking-tighter'>
            <li className='cursor-pointer navbar-item'><a href="#">Home</a></li>
            <li className='cursor-pointer navbar-item'><a href="#about">About Us</a></li>
            <li className='cursor-pointer navbar-item'><a href="#features">Features</a></li>
            <li className='cursor-pointer navbar-item'><a href="#reserve">Reserve a seat</a></li>
            <li className='cursor-pointer navbar-item'><a href="#gallery">Gallery</a></li>
            <li className='cursor-pointer navbar-item'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
