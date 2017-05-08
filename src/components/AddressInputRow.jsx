import React from 'react';
import FilterInput from './FilterInput';

const AddressInputRow = ({ keys }) => {
  return (
    <tr>
      {keys.map(k => <th key={k}><FilterInput name={k}/></th>)}
    </tr>)
};

export default AddressInputRow;