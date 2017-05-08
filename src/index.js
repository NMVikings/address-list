import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, dispatch } from 'redux'
import addressList from './reducers'
import App from './containers/App';
import { addAddresses } from './actions';
import './index.css';
import data from './data/address-list.json';
import newData from './data/new_address_list.json';

let store = createStore(addressList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(addAddresses([...data, ...newData]));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
