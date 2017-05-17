const combineListReducer =  (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_COMBINE_LIST':
    if (state.includes(action.id)) {
      return state.filter(item => item !== action.id);
    }
    return [...state, action.id];
  case 'COMBINE_ADDRESSES':
    return [];
  default:
    return state;
  }
};

export default combineListReducer;