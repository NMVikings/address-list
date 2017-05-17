import React from 'react';
const toop = () => {};

const Input = ({ value, name, onChange = toop }) => {
  return (
    <input type="text" name={name} placeholder={name} onChange={onChange} value={value}/>
  );
};

export default Input;