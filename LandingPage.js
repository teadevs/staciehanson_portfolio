import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="section portfolio-section">
        <h2>UX Design & Portfolio</h2>
        <p>Explore my UX design projects and learn about my design process.</p>
        <Link to="/portfolio" className="button">Explore Portfolio</Link>
      </div>
      <div className="section author-section">
        <h2>Author & Fiction</h2>
        <p>Enter the world of my fiction and discover my writing journey.</p>
        <Link to="/author" className="button">Enter Author Section</Link>
      </div>
    </div>
  );
}

export default LandingPage;