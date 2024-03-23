import React from 'react';

const Button = ({ id, className, children, onClick }) => {
  return (
    <button type="submit" id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;