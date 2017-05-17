const addAddresses = (data) => {
  return {
    type: 'ADD_ADDRESSES',
    data
  };
};

const sortAddressList = (id, direction) => {
  return {
    type: 'SORT_ADDRESS_LIST',
    id,
    direction
  };
};

const filterAddressList = (column, value) => {
  return {
    type: 'FILTER_ADDRESS_LIST',
    column,
    value
  };
};

const showMoreAddresses = (number = 10) => {
  return {
    type: 'SHOW_MORE_ADDRESSES',
    number
  };
};

const combineAddresses = (combineList) => {
  return {
    type: 'COMBINE_ADDRESSES',
    combineList
  };
};

const updateCombineList = (id) => {
  return {
    type: 'UPDATE_COMBINE_LIST',
    id
  };
};

const refreshAddressList = (data) => {
  return {
    type: 'REFRESH_ADDRESS_LIST',
    data
  };
};

export {
  addAddresses,
  sortAddressList,
  filterAddressList,
  showMoreAddresses,
  combineAddresses,
  updateCombineList,
  refreshAddressList
};