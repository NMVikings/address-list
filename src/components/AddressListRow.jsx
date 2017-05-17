import React from 'react';
import AddressListItem from './AddressListItem';
import AddressListCheckbox from './AddressListCheckbox';

const AddressListRow = ({ data }) => {
  return (
    <tr>
      {Object.keys(data).map((key, index) => {
        if (key === 'id') {
          return (<AddressListCheckbox key={index} id={data[key]} />);
        }

        return (<AddressListItem text={data[key]} key={index} />);
      })
      }
    </tr>
  );
};

export default AddressListRow;