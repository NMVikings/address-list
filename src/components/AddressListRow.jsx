import React from 'react';
import AddressListItem from './AddressListItem';
const AddressListRow = ({ data }) => {
  return (
    <tr>
      {Object.keys(data).map((item, index) => <AddressListItem text={data[item]} id={item} key={index} />)}
    </tr>
  )
}

export default AddressListRow;