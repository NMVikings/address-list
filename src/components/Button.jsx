import React from 'react';

const Button = ({ isActive = false, isDisabled, onClick, children}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isActive}
      className={isActive ? 'button-active' : ''}
    >
      {children}
    </button>
  )
}

export default Button;