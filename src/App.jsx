import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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