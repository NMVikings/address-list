import { combineReducers } from 'redux';
import filters from './filters';
import data from './data';
import sort from './sort';

export default combineReducers({
  data,
  sort,
  filters
});