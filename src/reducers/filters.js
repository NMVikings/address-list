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

const checkStringEntry = (element, string) => {
  if (typeof element === 'string') {
    return element.includes(string);
  } else if (element instanceof Array) {
    return element.map(str => str.includes(string));
  }
};

const createFilters = (filters) => {
  const createFilter = (column, value) => {
    if (column === 'global') {
      return data => data.filter(item =>
        Object.keys(item).reduce((prevAcc, key) => {
          return checkStringEntry(item[key], value) || prevAcc;
        }, false));
    }
    return data =>
      data.filter(item =>
        checkStringEntry(item[column].toLowerCase(), value.trim().toLowerCase())
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