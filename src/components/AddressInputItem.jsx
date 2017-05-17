import React from 'react';
import FilterInput from '../containers/FilterInput';
import CombineAddressesButton from './CombineAddressesButton';

const AddressInputItem = ({ id }) => {
  if (id === 'id') {
    return (
      <th>
        <CombineAddressesButton />
      </th>
    );
  }
  return (
    <th>
      <FilterInput name={ id }/>
    </th>
  );
};

export default AddressInputItem;