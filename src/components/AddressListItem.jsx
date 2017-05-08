import React from 'react';

const AddressListItem = ({ data }) => {
  console.log(data);
  return (
    <tr>
      {Object.keys(data).map((item, index) => <td key={index}>{data[item]}</td>)}
    </tr>
  )
}

export default AddressListItem;