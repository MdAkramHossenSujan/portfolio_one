import { useEffect, useState } from "react";
import dayjs from "dayjs";
import {  IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import logo from '../assets/Black White Simple Initials Logo.png'
export default function Footer() {
    //State to set current time
    const [currentTime, setCurrentTime] = useState(dayjs());
    //UseEffect to scroll to top when pages changes
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    //UseEffect to set current time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    //Return the footer component
    return (
        <footer className="w-full text-center py-4 px-2 bg-base-300 dark:bg-gray-950 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex justify-center text-3xl lg:text-4xl xl:text-5xl items-center ">
                <IoMdArrowDropleft />
                <img className="h-12 w-12 mr-1 p-1 border rounded-full dark:border-cyan-400" src={logo} alt="" />
                <p onClick={scrollToTop} className="font-semibold py-4 text-gray-600 cursor-pointer dark:text-cyan-400">@mdsujandev</p>
                <IoMdArrowDropright />

            </div>
            {/* Optional tags or description */}
            <div className="mb-2 flex flex-wrap justify-center gap-3 lg:gap-5 xl:gap-8">
                <span>Developer</span>
                <span>Engineer</span>
                <span>Creative</span>
                <span>Passionate</span>
                <span>Mindset</span>
                <span>Thinker</span>
            </div>
            {/*Clicking anchor tag will take to specific div */}
            <div className="mb-2 flex flex-wrap justify-center gap-3 lg:gap-5 xl:gap-8">
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
            </div>
            {/*Current time display*/}
            <div className="mb-2 flex flex-col sm:flex-row justify-center items-center gap-2">
                <span className="font-semibold text-gray-600 dark:text-cyan-400">
                    {currentTime.format("HH:mm:ss")}
                </span>
                <span className="hidden md:block">|</span>
                <span>{currentTime.format("ddd, MMM D, YYYY")}</span>
            </div>
            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
                Copyright © {currentTime.format("YYYY")} - All rights reserved by{" "}
                <span className="text-blue-600 dark:text-cyan-400"> @mdsujan</span>
            </p>
        </footer>
    );
}
