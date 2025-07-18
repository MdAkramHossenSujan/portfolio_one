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
import GithubContribution from '../components/GithubContribution';

const Home = () => {
  //Theme toggling form authcontext
  const { theme } = useContext(AuthContext);
  //Projects data from projects.json using loader
  const projects=useLoaderData()
  //Background image based on theme
  const backgroundImage = theme === 'dark' ? darkBg : lightBg;
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
      <GithubContribution/>
    </div>
    <div>
      <Contact></Contact>
    </div>
    </div>
  );
};

export default Home;
