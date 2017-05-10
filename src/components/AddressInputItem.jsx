import React from 'react';
import FilterInput from '../containers/FilterInput';

const AddressInputItem = ({ id }) => {
  return (
    <th>
      <FilterInput name={ id }/>
    </th>
  )
}

export default AddressInputItem;