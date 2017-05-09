import React from 'react';
import SortButtonUp from './SortButtonUp';
import SortButtonDown from './SortButtonDown';

const AddressTitleItem = ({ id }) => {
  return (
    <th>
      <SortButtonUp id={ id }>Up</SortButtonUp>
      { id }
      <SortButtonDown id={ id }>Down</SortButtonDown>
    </th>
  )
}

export default AddressTitleItem;