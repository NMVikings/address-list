import React from 'react';
import AddressListItem from './AddressListItem';
import AddressListCheckbox from './AddressListCheckbox';

const AddressListRow = ({ id, data }) => {
  return (
    <tr>
      <AddressListCheckbox id={id} />
      {Object.keys(data).map((item, index) => <AddressListItem text={data[item]} id={item} key={index} />)}
    </tr>
  )
}

export default AddressListRow;