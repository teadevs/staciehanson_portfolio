import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; // Your landing page component
import Portfolio from './Portfolio'; // Your portfolio component
import Author from './Author'; // Your author component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/author" element={<Author />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;