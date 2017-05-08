import React from 'react';
import AddressTitleRow from './AddressTitleRow';
import AddressInputRow from './AddressInputRow';

const AddressBookHeader = ({ keys }) => {
  return (
    <thead>
      <AddressTitleRow keys={keys} />
      <AddressInputRow keys={keys} />
    </thead>
  )
}

export default AddressBookHeader;