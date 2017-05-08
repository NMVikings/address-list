export default (state = {}, action) => {
  switch (action.type) {
    case 'FILTER_ADDRESS_LIST':
      const newFilter = (data) => data.filter(item => item[action.column].toLowerCase().includes(action.value.trim().toLowerCase()));
      return {...state, [action.column]: newFilter};
    default:
      return state;
  }
}