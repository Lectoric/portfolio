// filepath: /c:/Users/panay/Desktop/BUAS/YEAR 2/REPOSITORIES/portfolio/src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Projects from './pages/projects';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;