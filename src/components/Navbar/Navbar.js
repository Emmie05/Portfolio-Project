import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='navbar'>
      <img
        src={theme === 'light' ? logo_light : logo_dark}
        alt="Logo"
        className='logo'
      />
      <nav>
        <NavLink to="/" exact activeClassName="active" className='nav-link'>
          Home
        </NavLink>
      </nav>
      <img
        onClick={toggleMode}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="Toggle Dark Mode"
        className='toggle-icon'
      />
    </div>
  );
};

export default Navbar;
