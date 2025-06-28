import React from "react";
import { Link } from "react-router";
import { FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiExpress } from "react-icons/si";
import myImage from "../assets/Adobe Express - file (1).png"; // Replace with your image path

const AboutPage = () => {
    return (
        <section className="bg-base-100 dark:bg-neutral px-6 lg:px-12 py-24">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">

                {/* Left Column */}
                <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-cyan-400">
                            About Me
                        </h2>
                        <div className="flex-1 h-px bg-slate-300 dark:bg-cyan-600"></div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        Hello! My name is Md. Akram Hossen Sujan. I’m a MERN Stack Developer currently living in Raojan, Pahartoli, Chattagram, though my roots are in Brahmanbaria where I grew up. I spent my college years in Uttara, Dhaka. Interestingly, I didn’t initially choose IT as my academic path.But I was curious about how websites work and how the designs are mde,also their functionality.So i started my journey of learning web development bootcamps, and the journey has been incredible ever since.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        When I started learning, I was fascinated by how HTML structures pages, how CSS styles them, and how JavaScript breathes life into interactions. Discovering React felt like discovering my own creative canvas. It became the tool through which I could bring any vision to life, and that’s when web development truly became my world.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        I enjoy coming up with creative ideas for functionality and successfully implementing them in my projects. I’m detail-oriented, striving for visually appealing and well-structured designs. Outside of coding, I love working out, playing sports, and spending quiet moments with nature. It’s peaceful and helps me think deeply about time, the universe, and the bigger picture of life.
                    </p>

                    <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                        I believe in constantly learning and growing as a developer. I see challenges as opportunities and aim to contribute to meaningful projects that have real-world impact. I prefer to keep a low profile and enjoy working independently, focused on my goals and the satisfaction of building something great.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300 text-sm">
                        <div className="flex items-center gap-2">
                            <FaJs className="text-yellow-500 w-5 h-5" /> JavaScript
                        </div>
                        <div className="flex items-center gap-2">
                            <FaReact className="text-cyan-500 w-5 h-5" /> React
                        </div>
                        <div className="flex items-center gap-2">
                            <FaNodeJs className="text-green-600 w-5 h-5" /> Node.js
                        </div>
                        <div className="flex items-center gap-2">
                            <SiTypescript className="text-blue-600 w-5 h-5" /> TypeScript
                        </div>
                        <div className="flex items-center gap-2">
                            <SiExpress className="text-gray-500 w-5 h-5" /> Express.js
                        </div>
                        <div className="flex items-center gap-2">
                            <SiMongodb className="text-green-700 w-5 h-5" /> MongoDB
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="lg:w-1/2 md:w-2/3 flex justify-center md:justify-end">
                    <div>
                        <img
                            src={myImage}
                            alt="Md. Akram Hossen Sujan"
                            className="object-cover w-full mb-0 md:mb-44 lg:mb-18 h-full rounded group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
        
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;
