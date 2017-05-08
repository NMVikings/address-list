import { combineReducers } from 'redux';
import { refreshData } from '../actions'

const dataReducer = (state = {data:[], filteredData:[], visibleData:[], filters:[]}, action) => {
  const filterData  = (data, filters) => {
    return data;
  }
  const showData = (data, amount = 10) => {
    console.log(data, amount)
    return data.slice(0, amount);
  }
  let newData, filteredData, visibleData;
  switch (action.type) {
    case 'ADD_ADDRESSES':
      newData = [...state.data, ...action.data];
      filteredData = filterData(newData);
      visibleData = showData(filteredData);
      return {...state, data: newData, filteredData, visibleData};
    case 'SHOW_MORE_ADDRESSES':
      visibleData = showData(state.filteredData, state.visibleData.length + action.number);
      return {...state, visibleData}
    default:
      return state;
  }
}

const addressList = dataReducer;
// combineReducers(
//   dataReducer
// );

export default addressList;