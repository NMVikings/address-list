import React from 'react';
import AddressListRow from './AddressListRow';

const AddressList = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => <AddressListRow key={index} data={item} />)}
    </tbody>);
}

export default AddressList;