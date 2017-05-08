import React from 'react';

const AddressTitleRow = ({ keys }) => {
  return (
    <tr>
      {keys.map(k => <th key={k}>{k}</th>)}
    </tr>
  )
};

export default AddressTitleRow;