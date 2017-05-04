import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import data from './data/address-list.json';

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
