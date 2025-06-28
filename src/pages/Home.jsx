import React, { useContext } from 'react';
import Banner from '../components/Banner';
import lightBg from '../assets/rm380-11.jpg';
import darkBg from '../assets/modern-background-with-lines.jpg';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { theme } = useContext(AuthContext);
  const backgroundImage = theme === 'dark' ? darkBg : lightBg;

  return (
    <div
      className="lg:py-18 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Banner />
    </div>
  );
};

export default Home;
