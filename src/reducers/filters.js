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


const filterData = (filters, data) => {



  const filterItem = (item) => {
    const goThrowSingleFilter = (acc, key) => {
      let newAcc = false;

      if (key === 'id') {
        return acc;
      }

      const filtrator = filters[key];
      const value = item[key];

      if (key !== 'global') {
        newAcc = checkStringEntry(value, filtrator);
      } else if (key === 'global') {
        newAcc = Object.keys(item).reduce((prevAcc, itemKey) => {
          if (itemKey === 'id') {
            return prevAcc;
          }
          return checkStringEntry(item[itemKey], filtrator)  || prevAcc;
        }, false);
      }

      return newAcc && acc;
    };

    const goThrowAllFilters = (item) => Object.keys(filters).reduce(goThrowSingleFilter, true);

    return goThrowAllFilters(item);
  }


  const filteredData = data.filter(filterItem);
  // item => {
  //   Object.keys(filters).reduce((acc, key) => {
  //     if (key === 'global') {
  //       Object.keys(item).reduce((prevAcc, key) => {
  //         if (key ===)
  //       })
  //     }
  //   }, false);
  // });
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



  return filteredData;
};

const getValue = (filters, column) => {
  return filters[column];
};


export {
  filters,
  filterData,
  getValue
};