import { combineReducers } from 'redux';
import numberOfVisibleAddresses from './numberOfVisibleAddresses';
import filters from './filters';
import data from './data';

export default combineReducers({
  data,
  numberOfVisibleAddresses,
  filters
});