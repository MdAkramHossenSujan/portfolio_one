import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDatabase,
  FaEye,
  FaTools
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiReactrouter,
  SiFramer,
  SiAxios,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const techIcons = {
  React: <FaReact />,
  'React.js': <FaReact />,
  'React Router': <SiReactrouter />,
  Vite: <SiVite />,
  'Tailwind CSS': <SiTailwindcss />,
  Tailwind: <SiTailwindcss />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  TypeScript: <SiTypescript />,
  NodeJS: <FaNodeJs />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  'Express.js': <SiExpress />,
  Firebase: <SiFirebase />,
  'Firebase ': <SiFirebase />,
  JWT: <SiJsonwebtokens />,
  Axios: <SiAxios />,
  Redux: <SiRedux />,
  GitHub: <FaGithub />,
  Python: <FaPython />,
  Database: <FaDatabase />,
  'Framer Motion': <SiFramer />,
};


// Normalizer function
const normalizeTech = (tech) =>
  tech.replace(/\.js$/i, '').replace(/[-_\s]/g, '').toLowerCase();

const ProjectCard = ({ projects }) => {
  return (
    <section id='projects' className="py-10 scroll-mt-18 transition-colors duration-500">
      <div className="max-w-[1540px] mx-auto px-6 md:px-13">
        <h2 className="text-green-600 dark:text-green-400 text-lg mb-2">● Projects</h2>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-10 font-mono">My Recent Works</h1>

        {projects.map((project) => (
          <div key={project.id} className='py-6'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-xl shadow-lg w-full max-w-full"
              >
                <img
                  src={project.images.imageone}
                  alt={project.nickname}
                  className="object-cover w-full max-w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              {/*Right for small device */}
              <div className="w-full md:hidden space-y-2 text-sm md:text-base">
                {/* Time Taken */}
                <div className="border-b border-gray-300 flex justify-between dark:border-gray-600 pb-4">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">Completion Time</p>
                  <p className="text-gray-900 px-8 dark:text-white">{project.info.timeTaken}</p>
                </div>

                {/* Technologies */}
                <div className="border-b border-gray-300 dark:border-gray-600 pb-4">
                  <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.info.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 border border-gray-400 dark:border-cyan-400 rounded-full text-gray-800 dark:text-cyan-300 font-mono text-xs whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 w-full">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <FaGithub /> GitHub Client
                  </a>
                  <Link
                    to={`projects/${project.id}`}
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    <FaEye /> Details
                  </Link>
                </div>
              </div>


              {/* Right - Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 hidden md:block md:px-0"
              >
                <h3 className="text-green-700 font-mono dark:text-green-400 text-2xl md:text-3xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{project.shortDescription}</p>

                <div className="space-y-2 font-mono">
                  <p className="text-red-600 dark:text-red-400 font-semibold">Project Info</p>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">
                      <span className="text-gray-600 dark:text-gray-400">Completion Time</span>
                    </div>
                    <div className="border-b border-gray-300 dark:border-gray-600 py-2">
                      <span className="text-gray-900 dark:text-white">{project.info.timeTaken}</span>
                    </div>

                    <div className="py-2 border-b border-gray-300 dark:border-gray-600">
                      <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2 py-2 border-b border-gray-300 dark:border-gray-600 overflow-x-auto max-w-full">
                      {project.info.technologies.map((tech, index) => {
                        const icon = Object.entries(techIcons).find(
                          ([key]) => normalizeTech(key) === normalizeTech(tech)
                        )?.[1];
                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 border border-gray-400 dark:border-cyan-400 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-cyan-300 font-mono whitespace-nowrap"
                          >
                            {icon || <FaTools className="text-xs" />} {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <FaGithub /> GitHub Client
                  </a>
                  <Link
                    to={`projects/${project.id}`}
                    className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
                  >
                    <FaEye /> Details
                  </Link>
                </div>
              </motion.div>


            </div>

            <hr className='md:border-dotted border-none border-gray-300 dark:border-gray-600 md:mt-8 w-full' />
          </div>
        ))}
      </div>
    </section>

  );
};

export default ProjectCard;




