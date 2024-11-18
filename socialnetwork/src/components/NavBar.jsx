import React, { useState, useRef } from 'react';
import logo from '../assets/logosn.png';
import CircleAvatar from './CircleAvatar';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToolTipOpen, setIsToolTipOpen] = useState(false);
   

    const tooltipTimeoutRef = useRef(null); // Ref to store the timeout ID

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseOver = () => {
        tooltipTimeoutRef.current = setTimeout(() => {
            setIsToolTipOpen(true);
        }, 1000);
    };

    const handleMouseLeave = () => {
        clearTimeout(tooltipTimeoutRef.current); 
        setIsToolTipOpen(false);
    };

    return (
        <div className="flex items-center justify-between px-2 bg-blue-700 shadow-lg relative">
            {/* Left: Logo */}
            <div>
                <img className="w-16 h-16 p-2" src={logo} alt="Logo" />
            </div>

            {/* Middle: Title */}
            <div>
                <h1 className="text-2xl font-serif">Social Network</h1>
            </div>
            {/* Right: Avatar and Tooltip */}
            <div
                className="relative"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <CircleAvatar
                    handleClick={handleMenu}
                    bg="bg-blue-400"
                />
                {/* Tooltip */}
                {/* <div
                    className={`absolute bg-orange-100 p-1 rounded-md z-50 ${isToolTipOpen ? 'block' : 'hidden'} transition-all duration-300`}
                  
                >
                    {user?.username}
                </div> */}
            </div>

            {/* Menu */}
            <div
                className={`absolute right-1 top-[4.2rem] bg-blue-400 grid justify-center items-center w-40 py-2 rounded-md shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                {/* Title */}
                {/* <h1>{user?.username}</h1> */}
                {/* Avatar */}
                <div className="m-auto">
                    <CircleAvatar 
                     bg="bg-blue-700" />
                </div>
                {/* Email */}
                {/* <h2>{user.email}</h2> */}
                <hr className="h-0.5 w-36" />
                {/* Buttons */}
                <div className="grid">
                    <button className="bg-white mt-2 w-1/2 m-auto rounded-md py-1 text-blue-700 hover:bg-opacity-80">Settings</button>
                    <button
                        onClick={() => {
                            // Handle Sign Out
                        }}
                        className="bg-white mt-2 w-1/2 m-auto rounded-md py-1 text-blue-700 hover:bg-opacity-80"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}
