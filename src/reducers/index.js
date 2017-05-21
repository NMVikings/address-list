import { combineReducers } from 'redux';
import filters, { getValue, filterAddresses } from './filters';
import sort, { sortAddresses } from './sort';
import data from './data';
import combineList from './combineList';


export default combineReducers({
  data,
  combineList,
  sort,
  filters
});

const getFilterValue = (state, name) => getValue(state.filters, name);

const getSelectedData = ({ data, sort, filters}) =>
  sortAddresses(filterAddresses(filters, data), sort);

export {
  getFilterValue,
  getSelectedData
};