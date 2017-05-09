import React from 'react';
import AddressList from './AddressList';
import AddressBookHeader from './AddressBookHeader';
import ShowMoreButton from './ShowMoreButton';

const AddressBook = ({ numberOfAvailableAddresses, data, keys }) => {
  return (
    <div>
      <table>
        <AddressBookHeader keys={keys}/>
        <AddressList data={data} />
      </table>
      <ShowMoreButton numberOfAvailableAddresses={numberOfAvailableAddresses}>
        <span>Show More</span>
      </ShowMoreButton>
    </div>
  );
}
export default AddressBook;