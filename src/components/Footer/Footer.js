import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css'

// Footer component definition
const Footer = () => {
  return (
    <div className='FooterContainer'>
      {/* Display the name */}
      <p>Emmanuel Forster</p>
      
      {/* Social media links */}
      <div className='SocialLinks'>
        <a href="https://www.linkedin.com/in/emmanuel-forster-3ab072296" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Emmie05" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/EmmForster" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/emm_adams" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      
      {/* Copyright information */}
      <p>&copy; 2024 Alx Africa. All rights reserved.</p>
    </div>
  );
};

// Export the Footer component as the default export
export default Footer;
