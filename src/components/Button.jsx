import React from 'react';

const Button = ({ isDisabled, onClick, children}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button;