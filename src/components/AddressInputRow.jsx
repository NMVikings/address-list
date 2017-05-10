import React from 'react';
import AddressInputItem from './AddressInputItem';

const AddressInputRow = ({ keys }) => {
  return (
    <tr>
      {keys.map(k => <AddressInputItem key={k} id={k}/>)}
    </tr>)
};

export default AddressInputRow;