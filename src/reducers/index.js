import { combineReducers } from 'redux';
import { filters } from './filters';
import { sort } from './sort';
import data from './data';
import combineList from './combineList';


export default combineReducers({
  data,
  combineList,
  sort,
  filters
});