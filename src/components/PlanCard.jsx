import React from 'react';

const PlanCard = ({ price, description, bgColor, textColor = '' }) => {
  return (
    <div className={`card-planos ${bgColor}`}>
      <h1 className={textColor}>{price}</h1>
      <p className={textColor} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default PlanCard;