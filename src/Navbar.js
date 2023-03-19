import React, { useState } from 'react';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={showMobileMenu}
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${showMobileMenu ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`block h-6 w-6 ${showMobileMenu ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-10 w-auto lg:hidden"
                src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679062481/nahnah-black-removebg_yi9owm.png"
                alt="Your Company"
              />
              <img
                className="hidden h-10 w-auto lg:block object-fill"
                src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679062481/nahnah-black-removebg_yi9owm.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#home" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                  Home
                </a>

                <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${showMobileMenu ? 'block transition-opacity duration-300 ease-in-out opacity-100' : 'hidden transition-opacity duration-300 ease-in-out opacity-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" onClick={handleMobileMenuToggle}>
            Home
          </a>

          <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleMobileMenuToggle}>
            Projects
          </a>

          <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleMobileMenuToggle}>
            About
          </a>

          <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleMobileMenuToggle}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
