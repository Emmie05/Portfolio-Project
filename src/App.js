import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GPACalculator from './pages/GPACalculator/GPACalculator';
import ResistorColorCode from './pages/ResistorColorCode/ResistorColorCode';

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
