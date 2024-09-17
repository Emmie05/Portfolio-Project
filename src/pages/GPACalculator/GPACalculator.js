import React, { useState } from 'react';
import './GPACalculator.css';

/**
 * GPACalculator component allows users to input their courses, credits, and grades to calculate their GPA.
 * 
 * @component
 * @example
 * return (
 *   <GPACalculator />
 * )
 * 
 * @returns {JSX.Element} The GPA Calculator component.
 * 
 * @typedef {Object} Course
 * @property {string} name - The name of the course.
 * @property {number} credits - The number of credits for the course.
 * @property {string} grade - The grade received for the course.
 * 
 * @typedef {Object} GradeValues
 * @property {number} A - Grade value for A.
 * @property {number} B+ - Grade value for B+.
 * @property {number} B - Grade value for B.
 * @property {number} B- - Grade value for B-.
 * @property {number} C+ - Grade value for C+.
 * @property {number} C - Grade value for C.
 * @property {number} C- - Grade value for C-.
 * @property {number} D - Grade value for D.
 * @property {number} E - Grade value for E.
 * @property {number} F - Grade value for F.
 * 
 * @function handleCourseChange
 * @description Handles the change in course input fields.
 * @param {number} index - The index of the course being changed.
 * @param {string} field - The field of the course being changed (name, credits, grade).
 * @param {string|number} value - The new value for the field.
 * 
 * @function addCourse
 * @description Adds a new course input field.
 * 
 * @function calculateGpa
 * @description Calculates the GPA based on the courses, credits, and grades inputted.
 * 
 * @state {Course[]} courses - The list of courses inputted by the user.
 * @state {number|null} gpa - The calculated GPA.
 */
const GPACalculator = () => {
  const [courses, setCourses] = useState([{ name: '', credits: '', grade: 'A' }]);
  const [gpa, setGpa] = useState(null);

  const gradeValues = {
    'A': 4.0,
    'B+': 3.75,
    'B': 3.25,
    'B-': 3.0,
    'C+': 2.75,
    'C': 2.5,
    'C-': 2.0,
    'D': 1.5,
    'E': 1.25,
    'F': 1.0,
  };

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { name: '', credits: '', grade: 'A' }]);
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(course => {
      const gradeValue = gradeValues[course.grade];
      totalPoints += gradeValue * course.credits;
      totalCredits += course.credits;
    });
    setGpa((totalPoints / totalCredits).toFixed(2));
  };

  return (
    <div className="GpaCalculator">
      <div className="GPACalculatorContainer">
        <h1 className='gpa-header'>GPA Checker</h1>
        <div className="CoursesContainer">
          {courses.map((course, index) => (
            <div key={index}>
              <input
                className="CourseInput"
                type="text"
                placeholder="Module"
                value={course.name}
                onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
              />
              <select
                className="creditDropdown"
                value={course.credits}
                onChange={(e) => handleCourseChange(index, 'credits', parseInt(e.target.value))}
              >
                <option value="" disabled>
                  Hours
                </option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <select
                className="Dropdown"
                value={course.grade}
                onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
              >
                {Object.keys(gradeValues).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="btn">
          <button className='btn-gpa2' onClick={addCourse}>Add Module</button>
          <button className='btn-gpa1' onClick={calculateGpa}>Calculate GPA</button>
        </div>
        {gpa !== null && (
          <div className="ResultContainer">
            <h2 className='gpa-value'>Your GPA: {gpa}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPACalculator;
