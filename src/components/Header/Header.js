import Button from '../Buttons/Button';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Login from '../LoginSignup/Login/Login';
const Header = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUsername('John Doe');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <header>
            <nav>
                <h1>Egovernance</h1> {!isLoggedIn ? (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </> 
                ) : (
                    <>
                        <li>{username}</li>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;