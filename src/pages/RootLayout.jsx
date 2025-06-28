import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default RootLayout;