import React, { useContext } from 'react';
import Banner from '../components/Banner';
import lightBg from '../assets/rm380-11.jpg';
import darkBg from '../assets/modern-background-with-lines.jpg';
import { AuthContext } from '../context/AuthContext';
import { div } from 'framer-motion/client';
import AboutMe from '../components/AboutMe';
import SkillSetSwitcher from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import { useLoaderData } from 'react-router';
import Contact from '../components/Contact';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  const { theme } = useContext(AuthContext);
  const projects=useLoaderData()
  const backgroundImage = theme === 'dark' ? darkBg : lightBg;
console.log(projects)
  return (
    <div>
      <div
      className="lg:py-18 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Banner />
      
    </div>
    <ScrollToTopButton/>
    <div>
      <AboutMe/>
    </div>
    <div>
      <SkillSetSwitcher/>
    </div>
    <div>
      <ProjectCard projects={projects}/>
    </div>
    <div>
      <Contact></Contact>
    </div>
    </div>
  );
};

export default Home;
