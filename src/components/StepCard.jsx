import React from 'react';

const StepCard = ({ imageNum, text }) => {
  return (
    <div className="card-como-funciona">
      <img src={`/assets/Number${imageNum}.svg`} alt="" className="icon-number" />
      {/* Aqui aceitamos JSX no texto para permitir <br/> */}
      <p className="textCard">{text}</p>
    </div>
  );
};

export default StepCard;