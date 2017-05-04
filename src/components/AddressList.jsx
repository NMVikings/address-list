import React from 'react';
import AddressListWrapper from './AddressListWrapper'

const AddressList = ({data}) => {
  const keys = data.slice(-1).map((item, index) =>
    <tr key={index}>{Object.keys(item).map((key, index) =>
      <th key={index}>{key}</th>)}
    </tr>);
  const filterInputs = data.slice(-1).map((item, index) =>
    <tr key={index}>{Object.keys(item).map((key, index) =>
      <td key={index}><input name={key} placeholder={key} /></td>)}
    </tr>);
  const list = data.map((item, index) =>
    <tr key={index}>{Object.keys(item).map((key, index) =>
      <td key={index}>{item[key]}</td>)}
    </tr>);

  return (
    <AddressListWrapper>
      <thead>{keys}</thead>
      <tbody>{filterInputs}{list}</tbody>
    </AddressListWrapper>);
}
export default AddressList;