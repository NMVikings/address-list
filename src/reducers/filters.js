const filters =  (state = {}, action) => {
  switch (action.type) {
  case 'FILTER_ADDRESS_LIST':
    return {...state, [action.column]: action.value};
  case 'REFRESH_ADDRESS_LIST':
    return {};
  default:
    return state;
  }
};

const createFilters = (filters) => {
  const createFilter = (column, value) => {
    if (column === 'global') {
      return data => data.filter(item =>
        Object.keys(item).reduce((prevAcc, key) => {
          return item[key].includes(value) || prevAcc;
        }, false));
    }
    return data =>
      data.filter(item =>
        item[column].toLowerCase().includes(value.trim().toLowerCase())
      );
  };

  return Object.keys(filters).map(column => createFilter(column, filters[column]));
};

const getValue = (filters, column) => {
  return filters[column];
};


export {
  filters,
  createFilters,
  getValue
};