import { combineReducers } from 'redux';
import filters from './filters';
import data from './data';

export default combineReducers({
  data,
  filters
});