import React from 'react';

const Input = ({ value, name, onChange = (e) => { console.log(e.target.value) } }) => {
  return (
    <input type="text" name={name} placeholder={name} onChange={onChange} value={value}/>
  )
}

export default Input;