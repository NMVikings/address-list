import React, { Component } from 'react';
import AddressList from '../components/AddressList.jsx';
import logo from '../logo.svg';
import './App.css';

const App = ({data}) => {
  return (
    <div className='App'>
      <div className='App--header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Address-list</h2>
      </div>
      <div className='App--content'>
        <AddressList data={data}/>
      </div>
    </div>
  );
};

export default App;
