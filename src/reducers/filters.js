export default (state = {}, action) => {
  const filterCreator= (column, value) => {
    return (data) =>
      data.filter(item =>
        item[column].toLowerCase().includes(value.trim().toLowerCase())
      )
  }
  switch (action.type) {
    case 'FILTER_ADDRESS_LIST':
      const newFilter = filterCreator(action.column, action.value);
      return {...state, [action.column]: newFilter};
    case 'REFRESH_ADDRESS_LIST':
      return {}
    default:
      return state;
  }
}