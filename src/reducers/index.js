import { combineReducers } from 'redux';

const dataReducer = (state = {data: []}, action) => {
  if (action.type === "ADD_DATA") {
    return {...state, data: [...state.data, ...action.data]};
  }
  return state;
}

const addressList = dataReducer;
// combineReducers(
//   dataReducer
// );

export default addressList;