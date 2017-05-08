import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, dispatch } from 'redux'
import addressList from './reducers'
import App from './containers/App';
import './index.css';
import data from './data/address-list.json';

let store = createStore(addressList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
  type: 'ADD_DATA',
  data
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
