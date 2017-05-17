import React from 'react';
import FilterInput from '../containers/FilterInput';
import CombineButton from '../containers/CombineButton';

const AddressInputItem = ({ id }) => {
  if (id === 'id') {
    return (
      <th>
        <CombineButton />
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