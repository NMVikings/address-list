import React, { Component } from 'react';
import AddressBookWrapper from './AddressBookWrapper.jsx';
import ShowMoreButton from '../components/ShowMoreButton'
import logo from '../logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='App--header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Address-book</h2>
      </div>
      <div className='App--content'>
        <AddressBookWrapper />
      </div>
      <ShowMoreButton />
    </div>
  );
};

export default App;
