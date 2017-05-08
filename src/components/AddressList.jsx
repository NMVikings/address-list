import React from 'react';
import AddressListItem from './AddressListItem';

const AddressList = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => <AddressListItem key={index} data={item} />)}
    </tbody>);
}

export default AddressList;