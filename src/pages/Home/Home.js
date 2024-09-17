import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home component renders the main page of the Portfolio Project.
 * It includes a title, description, and links to various tools.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
const Home = () => {
  return (
    <div className='HomeContainer'>
      <div className='div1'>
        <h1>Portfolio Project</h1>
        <p>Software Engineering</p>
        <p>ALX Africa</p>
      </div>
      <div className='tools'>
        <h4>Select a tool:</h4>
        <Link to="/gpa-calculator" aria-label="GPA Checker">GPA Checker</Link>
        <br />
        <Link to="/resistor-color-code" aria-label="Resistor Colour Code">Resistor Colour Code</Link>
      </div>
    </div>
  );
};

export default Home;
