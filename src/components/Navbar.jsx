import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Menu, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const {theme,toggleTheme}=use(AuthContext)
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <Menu/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <label onClick={toggleTheme} className={`cursor-pointer fixed bg-blue-600 dark:bg-blue-900
 md:p-2 p-1 z-100 rounded-full swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''}`}>
          <Moon size={20} className="swap-on text-gray-400" />
          <Sun size={20} className="swap-off text-yellow-500" />
        </label>
  </div>
</div>
    );
};

export default Navbar;