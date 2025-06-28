import React from 'react';
import myImage from '../assets/Untitled-2.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen lg:min-h-[84vh] lg:px-12 px-6 py-6 lg:py-8">
      {/* Left side - Text */}
      <div className="flex-1 flex justify-center text-center lg:pl-12 xl:pl-24 lg:text-left mt-3">
        <div className="max-w-4xl">
          {/* Small intro */}
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-medium text-slate-500 dark:text-slate-100 mb-2">
            Hello, It&apos;s Me, <span className="text-3xl font-mono md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white mb-2">
              Sujan
            </span>
          </p>

          {/* Role with highlight */}
          <h2 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-700 dark:text-slate-200 lg:mb-2">
            And I&apos;m a{' '}
            <span className="text-cyan-600 font-mono text-lg md:text-3xl lg:text-4xl xl:text-5xl dark:text-cyan-400">
              MERN Stack Developer
            </span>
          </h2>

          {/* Short description */}
          <p className="text-sm md:text-base xl:text-xl text-slate-500 dark:text-slate-300 mb-6 lg:mb-8">
            I’m a passionate MERN stack developer who loves building modern web
            applications with React, Node.js, and MongoDB. Currently expanding my
            backend expertise and looking for exciting projects!
          </p>

          {/* Social icons */}
          <div className="flex justify-center lg:justify-start gap-4 mb-4 lg:mb-8 flex-wrap">
            <a
              href="#"
              className="
                border border-cyan-600 dark:border-cyan-400
                text-cyan-600 dark:text-cyan-400
                hover:bg-cyan-500 dark:hover:bg-cyan-300
                hover:text-black dark:hover:text-blue-950
                rounded-full
                p-3
                transition-all
                duration-300
              "
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="
                border border-cyan-600 dark:border-cyan-400
                text-cyan-600 dark:text-cyan-400
                hover:bg-cyan-500 dark:hover:bg-cyan-300
                hover:text-black dark:hover:text-blue-950
                rounded-full
                p-3
                transition-all
                duration-300
              "
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="
                border border-cyan-600 dark:border-cyan-400
                text-cyan-600 dark:text-cyan-400
                hover:bg-cyan-500 dark:hover:bg-cyan-300
                hover:text-white
                rounded-full
                p-3
                transition-all
                duration-300
              "
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="
                border border-cyan-600 dark:border-cyan-400
                text-cyan-600 dark:text-cyan-400
                hover:bg-cyan-500 dark:hover:bg-cyan-300
                hover:text-black dark:hover:text-blue-950
                rounded-full
                p-3
                transition-all
                duration-300
              "
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Download CV Button */}
          <div>
            <a
              href="../assets/_final_Lab_2.pdf"
              download
              className="
                inline-block
                px-8 py-3
                rounded-full
                text-cyan-900
                bg-gradient-to-r
                from-cyan-300
                to-cyan-500
                hover:from-cyan-300
                hover:to-cyan-500
                dark:text-white
                dark:from-cyan-400
                dark:to-cyan-600
                dark:hover:from-cyan-500
                dark:hover:to-cyan-700
                font-semibold
                transition-all
                shadow-md
                shadow-teal-200
                dark:shadow-teal-400
              "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 flex justify-center mt-10 lg:mt-0">
        <img
          src={myImage}
          alt="Md. Akram Hossen Sujan"
          className=" xl:h-[500px] xl:w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
