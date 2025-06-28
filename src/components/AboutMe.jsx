import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AboutMeSection = () => {
    return (
        <motion.section
            id="aboutme"
            className="py-12 md:py-14 xl:pt-24 scroll-mt-36 transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl 2xl:max-w-7xl relative mx-auto px-4">
                <h2 className="text-3xl font-mono xl:absolute text-center xl:text-left -left-18 -top-14 md:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">
                    About
                </h2>

                <div className="xl:absolute top-4 -left-18">
                    <div className="h-0.5 w-24 mx-auto md:w-26 xl:w-20 bg-cyan-600 dark:bg-cyan-400 mb-6 transition-colors duration-500"></div>
                </div>

                {/* Paragraph */}
                <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 transition-colors duration-500">
                    Hello, I’m{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-bold">
                        Md. Akram Hossen Sujan
                    </span>
                    , a passionate{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        MERN Stack Developer
                    </span>
                    . Though I didn’t start my journey in IT, my curiosity led me into{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        web development
                    </span>
                    . I’m fascinated by how HTML, CSS and JavaScript bring pages to life,
                    and how React lets me build dynamic applications.
                    <br className="hidden md:block" />
                    <br />
                    I love thinking of new ideas for functionality and successfully
                    implementing them. Outside of code, I enjoy{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        working out
                    </span>
                    ,{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        sports
                    </span>
                    , and peaceful moments in nature. My personality leans toward being{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        thoughtful
                    </span>
                    , often contemplating the{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        flow of time
                    </span>{" "}
                    and the wonders of the{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        universe
                    </span>
                    .
                    <br className="hidden md:block" />
                    <br />
                    I consider myself{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        trustworthy
                    </span>
                    ,{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        creative
                    </span>
                    , and a{" "}
                    <span className="text-cyan-600 font-mono dark:text-cyan-400 font-semibold">
                        hard working person
                    </span>
                    . I look forward to contributing to impactful projects and growing my
                    skills every day.
                </p>

                {/* View More Link */}
                <Link
                    to="/aboutme"
                    className="mt-6 flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline font-semibold transition-colors duration-300"
                >
                    View more <IoIosArrowForward size={20} />
                </Link>
            </div>
        </motion.section>
    );
};

export default AboutMeSection;



