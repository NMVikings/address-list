import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, dispatch } from 'redux'
import addressList from './reducers'
import App from './containers/App';
import './index.css';
import data from './data/address-list.json';
import new_data from './data/new_address_list.json';

let store = createStore(addressList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
  type: 'ADD_DATA',
  data
})
window.setTimeout(() => {
  store.dispatch({
    type: 'ADD_DATA',
    data: new_data
  });
}, 3000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
