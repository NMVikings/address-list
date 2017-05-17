import React from 'react';
import AddressTitleItem from './AddressTitleItem';

const AddressTitleRow = ({ keys }) => {
  return (
    <tr>
      {keys.map(k => <AddressTitleItem key={k} id={k} />)}
    </tr>
  );
};

export default AddressTitleRow;