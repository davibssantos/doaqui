import React from 'react';

// Aceita: 'text' e 'color' (ex: 'bg-yellow', 'bg-white')
const SectionTag = ({ text, color = 'bg-yellow' }) => {
  return (
    <div className="container-tag">
      <div className={`tag ${color}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SectionTag;