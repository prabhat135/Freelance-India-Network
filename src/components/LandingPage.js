import React from 'react'
import './css/LandingPage.css'

import { useState,useEffect } from 'react';

function LandingPage() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const discordLink = 'https://discord.gg/a7gWAhdfbx';
    const redditLink = 'https://www.reddit.com/r/FreelanceIndia/';


  // const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  // // Function to update the position of the gradient circle based on mouse coordinates
  // const updateCirclePosition = (e) => {
  //   setCirclePosition({ x: e.clientX, y: e.clientY });
  // };

  // // Function to generate gradient white circle based on mouse position
  // const getGradientCircleStyle = () => {
  //   return {
  //     position: 'absolute',
  //     left: circlePosition.x - 200, // Adjusted for the larger size (300px / 2)
  //     top: circlePosition.y - 150, // Adjusted for the larger size (300px / 2)
  //     borderRadius: '50%',
  //     width: '300px',
  //     height: '300px',
  //     background: 'radial-gradient(circle, white 0%)',
  //   //   filter:'blur(10px)',
  //     backgroundSize: '150% 150%', // Adjusted for the larger size
  //     boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Optional: Add a subtle glow effect
  //     transition: 'background-position 0.5s, box-shadow 0.5s',
  //     pointerEvents: 'none', // Make the circular element non-clickable
  //     opacity: 0.7,
  //   };
  // };
  

  // useEffect(() => {
  //   document.addEventListener('mousemove', updateCirclePosition);

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('mousemove', updateCirclePosition);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once during component mount


    return (
        <div className="landing-page">
            {/* Logo and Company Name */}
            <header className="header">
                <div className="logo">
                    <div className='image'>

                    <img src={PUBLIC_URL + 'images/logonew.png'} alt="Company Logo" className="logo-image" />
                    </div>
                    <span className="company-name">
                        Freelance India Network
                    </span>
                </div>
            </header>
            
            {/* "COMING SOON" text */}

            <div className="main-text">
               
                <h1 className="coming-soon" >
                    COMING SOON!!
                </h1>
                <div className='box'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>

            {/* <div className='glass-container' style={getGradientCircleStyle()}>
            </div> */}


            {/* Icons with clickable links */}
            <div className="icons-container">
            
                <a href={discordLink} target="_blank" rel="noopener noreferrer">
                    <img src={PUBLIC_URL + 'images/discord.png'} alt="Discord Icon" className="icon" />
                </a>
                <a href={redditLink} target="_blank" rel="noopener noreferrer">
                    <img src={PUBLIC_URL + 'images/reddit.png'} alt="Reddit Icon" className="icon" />
                </a>
            </div>
    </div>
    )
}

export default LandingPage