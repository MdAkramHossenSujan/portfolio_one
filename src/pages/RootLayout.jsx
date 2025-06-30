import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default RootLayout;