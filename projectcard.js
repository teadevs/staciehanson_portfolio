import React, { useState } from 'react';

function ProjectCard({ title, description, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} onClick={toggleExpand} />
      <h2 onClick={toggleExpand}>{title}</h2>
      {isExpanded && (
        <div className="project-details">
          <p>{description}</p>
          {/* Add more details, such as links to live projects or code repositories */}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;