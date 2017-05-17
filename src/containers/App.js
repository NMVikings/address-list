import React from 'react';
import AddressBook from '../components/AddressBook.jsx';
import RefreshAddressListButton from './RefreshAddressListButton';
import GlobalFilterInput from './GlobalFilterInput';

const App = () => {
  return (
    <div className='App'>
      <div className='App--header'>
        <RefreshAddressListButton>Refresh</RefreshAddressListButton>
        <h2>Address-book</h2>
        <GlobalFilterInput />
      </div>
      <div className='App--content'>
        <AddressBook />
      </div>
    </div>
  );
};

export default App;
