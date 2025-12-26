import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <details>
      <summary>
        <span>{question}</span>
        <span className="icon">
          <img src="/assets/chevron-up.svg" alt="Expandir" width={24} height={24}/>
        </span>
      </summary>
      <div className="content">
        <p>{answer}</p>
      </div>
    </details>
  );
};

export default FaqItem;