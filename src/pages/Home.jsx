import React, { useContext } from 'react';
import Banner from '../components/Banner';
import lightBg from '../assets/rm380-11.jpg';
import darkBg from '../assets/modern-background-with-lines.jpg';
import { AuthContext } from '../context/AuthContext';
import { div } from 'framer-motion/client';
import AboutMe from '../components/AboutMe';

const Home = () => {
  const { theme } = useContext(AuthContext);
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
    <div>
      <AboutMe/>
    </div>
    </div>
  );
};

export default Home;
