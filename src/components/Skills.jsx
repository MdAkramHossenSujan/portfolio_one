import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaJs, FaLock, FaBolt, FaCloud, FaCodeBranch, FaBoxOpen } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiAxios } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
//Skill taken properly as array to insert dynamic sata
const frontendSkills = [
  {
    icon: <FaReact size={32} />,
    title: 'React',
    desc: 'JavaScript library for building fast, interactive user interfaces using reusable components.',
    expertise: 'Skilled in creating dynamic, reusable components and managing state effectively.'
  },
  {
    icon: <SiTailwindcss size={32} />,
    title: 'Tailwind CSS',
    desc: 'Utility-first CSS framework for responsive design.',
    expertise: 'Experienced in rapidly building custom, modern UI layouts.'
  },
  {
    icon: <FaJs size={32} />,
    title: 'JavaScript',
    desc: 'The programming language of the web.',
    expertise: 'Proficient in writing clean, modern ES6+ code for interactive applications.'
  }
];



const backendSkills = [
  {
    icon: <FaNodeJs size={32} />,
    title: 'Node.js',
    desc: 'JavaScript runtime for building server-side applications and APIs outside the browser.',
    expertise: 'Capable of creating APIs and backend services efficiently.'
  },
  {
    icon: <SiMongodb size={32} />,
    title: 'MongoDB',
    desc: 'NoSQL database for modern web applications.',
    expertise: 'Skilled in designing schemas, managing collections, and building scalable applications with MongoDB.'
  },
  {
    icon: <SiFirebase size={32} />,
    title: 'Firebase',
    desc: 'Backend-as-a-Service platform by Google.',
    expertise: 'Experienced in using authentication, Firestore, and cloud functions.'
  }
];

const otherSkills = [
  {
    icon: <FaGithub size={32} />,
    title: 'GitHub',
    desc: 'Hosting and version control for code repositories.',
    expertise: 'Confident in collaborating, managing branches, and deploying projects.'
  },
  {
    icon: <FaCodeBranch size={32} />,
    title: 'Git',
    desc: 'Version control system for tracking changes in source code.',
    expertise: 'Comfortable with branching, merging, and maintaining clean histories.'
  },
  {
    icon: <FaBolt size={32} />,
    title: 'AI Tools',
    desc: 'Using artificial intelligence tools in development workflows.',
    expertise: 'Integrating AI tools to boost productivity and code quality.'
  },
  {
    icon: <FaBoxOpen size={32} />, 
    title: 'Package Managing',
    desc: 'Managing project dependencies and tools via package managers.',
    expertise: 'Proficient with npm, yarn, and managing project dependencies efficiently.'
  }
];



const SkillSetSwitcher = () => {
  //To set active set used usestate and set frontend as primary display.
    const [activeSet, setActiveSet] = useState('frontend');
    //To set skills based on active set
    let skills = [];
    //If active set is frontend, set skills to frontendSkills
    if (activeSet === 'frontend') skills = frontendSkills;
    else if (activeSet === 'backend') skills = backendSkills;
    else if (activeSet === 'others') skills = otherSkills;
    //Return the skill set switcher component
    return (
        <div id='skills' className="transition-colors scroll-mt-20 duration-300 py-10 max-w-[1560px] mx-auto">
            <h2 className="xl:text-5xl md:text-4xl text-3xl mr-4 font-bold text-center font-mono mb-8">Skill-Set</h2>

            <div className="mb-8">
                <div className="flex flex-row mx-auto w-52 items-center space-x-4">
                    <div data-tooltip-id="tooltip-frontend" data-tooltip-content="Frontend Skills">
                        <button
                            className={`cursor-pointer w-4 h-4 rounded-full border-2 transition-transform duration-200 transform ${activeSet === 'frontend' ? 'bg-green-500 border-green-500 scale-110 ring-2 ring-green-400 ring-offset-2 dark:ring-offset-gray-900' : 'border-gray-600 dark:border-white hover:scale-105'}`}
                            onClick={() => setActiveSet('frontend')}
                        ></button>
                    </div>
                    <Tooltip id="tooltip-frontend" />

                    <div className="h-px w-10 bg-gray-600 dark:bg-white"></div>

                    <div data-tooltip-id="tooltip-backend" data-tooltip-content="Backend Skills">
                        <button
                            className={`cursor-pointer w-4 h-4 rounded-full border-2 transition-transform duration-200 transform ${activeSet === 'backend' ? 'bg-green-500 border-green-500 scale-110 ring-2 ring-green-400 ring-offset-2 dark:ring-offset-gray-900' : 'border-gray-600 dark:border-white hover:scale-105'}`}
                            onClick={() => setActiveSet('backend')}
                        ></button>
                    </div>
                    <Tooltip id="tooltip-backend" />

                    <div className="h-px w-10 bg-gray-600 dark:bg-white"></div>

                    <div data-tooltip-id="tooltip-others" data-tooltip-content="Other Skills">
                        <button
                            className={`cursor-pointer w-4 h-4 rounded-full border-2 transition-transform duration-200 transform ${activeSet === 'others' ? 'bg-green-400 border-green-300 scale-110 ring-2 ring-green-300 ring-offset-2 dark:ring-offset-gray-900' : 'border-gray-600 dark:border-white hover:scale-105'}`}
                            onClick={() => setActiveSet('others')}
                        ></button>
                    </div>
                    <Tooltip id="tooltip-others" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                <AnimatePresence>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="card bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all p-6 border border-gray-300 dark:border-gray-700 rounded-xl h-full flex flex-col justify-between">
                                <div className="flex flex-col items-center h-full">
                                    <div className="dark:text-cyan-400  mb-4">{skill.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">{skill.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-center flex-grow">{skill.desc}</p>
                                    <p className="text-gray-600 text-sm italic dark:text-gray-400 text-center flex-grow">{`"${skill.expertise}"`}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SkillSetSwitcher;
