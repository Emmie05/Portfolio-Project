import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GPACalculator from './pages/GPACalculator/GPACalculator';
import ResistorColorCode from './pages/ResistorColorCode/ResistorColorCode';

/**
 * The main application component that sets up routing and theme management.
 *
 * @component
 * @returns {JSX.Element} The rendered application component.
 *
 * @example
 * // Usage in a React application
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './App';
 *
 * ReactDOM.render(<App />, document.getElementById('root'));
 *
 * @description
 * This component initializes the theme from local storage and sets up routes for the application.
 * It uses React Router for navigation and includes a Navbar and Footer.
 *
 * @function
 * @name App
 */
function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gpa-calculator" element={<GPACalculator />} />
          <Route path="/resistor-color-code" element={<ResistorColorCode />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
