import React from 'react';
import AddressListItem from './AddressListItem';
import AddressListCheckbox from './AddressListCheckbox';

const AddressListRow = ({ id, data }) => {
  return (
    <tr>
      {Object.keys(data).map((item, index) => {
        if (item === 'id') {
          return (
            <AddressListCheckbox key={index} id={data[item]} />
          )
        }
        return (<AddressListItem text={data[item]} id={item} key={index} />)
      })
      }
    </tr>
  )
}

export default AddressListRow;