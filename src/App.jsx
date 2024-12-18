// filepath: /c:/Users/panay/Desktop/BUAS/YEAR 2/REPOSITORIES/portfolio/src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Projects from './pages/projects';
import About from './pages/about';
import ScrollToTop from './components/scroll_up';

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;