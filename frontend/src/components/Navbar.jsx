import React, { useState } from 'react'
const Navbar = () => {
  const [Sticky,setSticky]=useState(false);
  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>

  )
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 '>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <ul className="menu menu-vertical px-1 text-xl">
                  {navItems}
                </ul>
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer">Book-Store</a>
          </div>
          <div className="navbar-end space-x-3">

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl">
                {navItems}
              </ul>
            </div>
            <div className='hidden md:block'>
              <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </div>
            <div>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            </div>
            <div className="">
              <a className="btn bg-white text-black px-3 py-2 rounded-md hover:bg-slate-200  cursor-pointer">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
