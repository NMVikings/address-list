import React from 'react';

const Input = ({ name, onChange = (e) => { console.log(e.target.value) } }) => {
  return (
    <input name={name} placeholder={name} onChange={onChange}/>
  )
}

export default Input;