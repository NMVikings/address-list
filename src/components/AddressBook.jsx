import React from 'react';
import AddressList from './AddressList';
import AddressBookHeader from './AddressBookHeader';

const AddressBook = ({ data, keys }) => {
  return (
    <table>
      <AddressBookHeader keys={keys}/>
      <AddressList data={data} />
    </table>
  );
}
export default AddressBook;