# Portfolio Project: Interactive Resistor Color Code Generator and GPA Calculator

This portfolio project is a web application toolkit that contains two main features: a GPA calculator and a resistor color code resistance generator. The goal of this project is to provide users with useful tools to calculate their GPA and determine resistor values based on color codes.

## Features

1. **GPA Calculator**
   - Allows users to input course names, select grades from a dropdown menu, and input credit hours (up to a maximum of 10).
   - Calculates the GPA based on a grading scale:
     - 'A': 4.0
     - 'B+': 3.75
     - 'B': 3.25
     - 'B-': 3.0
     - 'C+': 2.75
     - 'C': 2.5
     - 'C-': 2.0
     - 'D': 1.5
     - 'E': 1.25
     - 'F': 1.0

2. **Resistor Color Code Generator**
   - Users can select colors for each band from dropdown menus.
   - Displays a visual representation of the resistor with the selected colors.
   - Calculates and displays the resistance value.


## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between different components.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Emmie05/portfolio-project.git
   cd mini-project

2. Install dependencies:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm start
4. Open your browser and navigate to http://localhost:3000.
    ```bash
    portfolio project/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Navbar/
    │   │   │   ├── Navbar.js
    │   │   │   └── Navbar.css
    │   │   ├── Footer/
    │   │   │   ├── Footer.js
    │   │   │   └── Footer.css
    │   ├── pages/
    │   │   ├── Home/
    │   │   │   ├── Home.js
    │   │   │   └── Home.css
    │   │   ├── GPACalculator/
    │   │   │   ├── GPACalculator.js
    │   │   │   └── GPACalculator.css
    │   │   ├── ResistorColorCode/
    │   │   │   ├── ResistorColorCode.js
    │   │   │   └── ResistorColorCode.css
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    ├── package.json
    ├── README.md

## Deployment
To deploy this project, you can use any static site hosting service like Vercel, Netlify, or GitHub Pages.

## Contact
    Developer: Emmanuel Forster
    Email: emmvicadforster@gmail.com