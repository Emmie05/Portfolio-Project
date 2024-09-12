import React, { useState } from 'react';
import './ResistorColorCode.css';

const ResistorColorCode = () => {
  const [colors, setColors] = useState({
    band1: 'black',
    band2: 'black',
    multiplier: 'black',
    tolerance: 'brown',
  });
  const [resistance, setResistance] = useState(null);

  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
    gold: -1,
    silver: -2,
  };

  const toleranceCodes = {
    brown: 1,
    red: 2,
    green: 0.5,
    blue: 0.25,
    violet: 0.1,
    gray: 0.05,
    gold: 5,
    silver: 10,
  };

  const handleColorChange = (band, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [band]: color,
    }));
  };

  const calculateResistance = () => {
    const { band1, band2, multiplier, tolerance } = colors;
    const resistanceValue =
      (colorCodes[band1] * 10 + colorCodes[band2]) *
      Math.pow(10, colorCodes[multiplier]);
    const resistanceString = resistanceValue >= 1000 && resistanceValue < 1000000
      ? `${resistanceValue / 1000}K`
      : resistanceValue >= 1000000
      ? `${resistanceValue / 1000000}M`
      : resistanceValue;
    const toleranceValue = toleranceCodes[tolerance];
    setResistance(`${resistanceString}Ω ±${toleranceValue}%`);
  };

  return (
    <div className="calculator">
      <div className="ResistorColorCodeContainer">
        <h1 className='Head'>Resistor Colour Code Calculator</h1>
        <div className="ResistorImage">
          <div className="band" style={{ left: '10%', background: colors.band1 }}></div>
          <div className="band" style={{ left: '30%', background: colors.band2 }}></div>
          <div className="band" style={{ left: '50%', background: colors.multiplier }}></div>
          <div className="band" style={{ right: '10%', background: colors.tolerance }}></div>
        </div>
        <select
          className="Dropdown"
          value={colors.band1}
          onChange={(e) => handleColorChange('band1', e.target.value)}
        >
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
        <select
          className="Dropdown"
          value={colors.band2}
          onChange={(e) => handleColorChange('band2', e.target.value)}
        >
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
        <select
          className="Dropdown"
          value={colors.multiplier}
          onChange={(e) => handleColorChange('multiplier', e.target.value)}
        >
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
        <select
          className="Dropdown"
          value={colors.tolerance}
          onChange={(e) => handleColorChange('tolerance', e.target.value)}
        >
          {Object.keys(toleranceCodes).map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
        <div className='btn'>
          <button className="btn-colorCode" onClick={calculateResistance}>Check Resistance</button>
        </div>
        {resistance && (
          <div className="ResultContainer">
            <h2 className='answer'>Resistance: {resistance}</h2>
          </div>
        )}
      </div>
   </div> 
  );
};

export default ResistorColorCode;
