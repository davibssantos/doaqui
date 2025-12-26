import React from 'react';

// Aceita props: 'variant' (pode ser 'default' ou 'white'), 'children' (texto) e 'onClick'
const Button = ({ children, variant = 'default', onClick }) => {
  // Define qual classe usar baseada na variante
  const btnClass = variant === 'white' ? 'btn-arrow-white' : 'btn-arrow';
  
  // Define qual imagem usar no final do botão
  const imageSrc = variant === 'white' 
    ? '/assets/button-image-white.svg' 
    : '/assets/button-image.svg';

  return (
    <button className={btnClass} onClick={onClick}>
      {children} 
      <img src="/assets/arrow-right.svg" alt="" />
      <div className="final-button">
        <img src={imageSrc} alt="" />
      </div>
    </button>
  );
};

export default Button;