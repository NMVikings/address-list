import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addressList from './reducers';
import App from './containers/App';
import { addAddresses } from './actions';
import './index.css';
import data from './data/address-list.json';

let store = createStore(addressList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(addAddresses(data));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
