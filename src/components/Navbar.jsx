import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Menu, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const { theme, toggleTheme } = use(AuthContext)
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><a href='#aboutme'>About me</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <div className="navbar fixed bg-base-100 z-10 px-6 lg:px-12 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu text-[16px] min-w-screen dropdown-content bg-base-100 rounded-box z-1  shadow">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <a className="text-2xl lg:text-4xl">Su Jan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-[16px] font-bold menu-horizontal px-1">
                    {
                        navItems
                    }
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