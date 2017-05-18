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

const checkStringEntry = (element, string) =>
  element.reduce((acc, str) => acc || str.includes(string), false);


const createFilters = (filters) => {
  const createFilter = (column, value) => {
    if (column === 'global') {
      return data => data.filter(item =>
        Object.keys(item).reduce((prevAcc, key) => {
          if (key === 'id') {
            return prevAcc;
          }
          return checkStringEntry(item[key], value) || prevAcc;
        }, false));
    }
    return data =>
      data.filter(item =>
        checkStringEntry(item[column], value)
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