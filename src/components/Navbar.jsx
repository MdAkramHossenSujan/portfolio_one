import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Menu, Moon, Sun } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const { theme, toggleTheme } = use(AuthContext)
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const closeDropdown = () => {
        setOpen(false);
    };
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><a href='#aboutme'>About me</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <div className="navbar fixed bg-base-100 z-10 px-3 md:px-6 lg:px-12 shadow-sm">
            <div className="navbar-start">
                <div className="lg:hidden relative">
                    {/* DaisyUI button */}
                    <button
                        onClick={toggleDropdown}
                        className="btn btn-ghost"
                    >
                        <Menu />
                    </button>

                    {/* DaisyUI dropdown content as fullscreen overlay */}
                    <div
                    onClick={closeDropdown}
                        className={`
          fixed top-16 left-0 w-screen
          bg-base-100 z-50
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? " opacity-100" : "h-0 opacity-0"}
        `}
                    >
                        <ul className="menu p-6 text-lg space-y-3">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                </div>
                <Link className="text-2xl lg:text-4xl">TechCrafter</Link>
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