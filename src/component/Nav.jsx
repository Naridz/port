import React from 'react'
import { FaMoon,FaRegSun } from "react-icons/fa6";
import { SiHomebridge } from "react-icons/si";

const Nav = () => {

  return (
    <nav className="z-10 navbar bg-neutral text-neutral-content sticky top-0">
      <div className="container mx-auto">
        <div className='navbar justify-between'>
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="btn btn-ghost cursor-pointer">
            <SiHomebridge className='w-10 h-10'/>
          </a>
          <ul className="flex max-[640px]:flex-col">
            <li className="mx-3 max-[640px]:my-2">
              <a href='#section1' >About</a>
            </li>
            <li className="mx-3  max-[640px]:my-2">
              <a href='#section2'>Education</a>
            </li>
            <li className="mx-3  max-[640px]:my-2">
              <a href='#section3'>Portfolio</a>
            </li>
          </ul> 
        <label className='swap swap-rotate'>
          <input type='checkbox' className='theme-controller' value="dracula" />
          <FaMoon className='swap-on w-10 h-10' />
          <FaRegSun className='swap-off w-10 h-10' />
        </label>
        </div>

      </div>
    </nav>
  );
}

export default Nav