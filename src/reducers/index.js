import { combineReducers } from 'redux';
import filters from './filters';
import data from './data';
import sort from './sort';
import combineList from './combineList';


export default combineReducers({
  data,
  combineList,
  sort,
  filters
});