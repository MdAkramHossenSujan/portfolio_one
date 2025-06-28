import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme || (systemPrefersDark ? 'dark' : 'light');
    });
    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
   


    const AuthInfo = {
        theme,
        toggleTheme,
    }
    return <AuthContext value={AuthInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;