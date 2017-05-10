import React from 'react';
import SortButtonUp from '../containers/SortButtonUp';
import SortButtonDown from '../containers/SortButtonDown';

const AddressTitleItem = ({ id }) => {
  if (id === 'id') {
    return (
      <th>
        checkbox
      </th>
    );
  }
  return (
    <th>
      <SortButtonUp id={ id }>Up</SortButtonUp>
      { id }
      <SortButtonDown id={ id }>Down</SortButtonDown>
    </th>
  )
}

export default AddressTitleItem;