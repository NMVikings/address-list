export const addAddresses = (data) => {
  return {
    type: 'ADD_ADDRESSES',
    data
  }
}

export const sortAddressList = (id, direction) => {
  return {
    type: 'SORT_ADDRESS_LIST',
    id,
    direction
  }
}

export const filterAddressList = (column, value) => {
  return {
    type: 'FILTER_ADDRESS_LIST',
    column,
    value
  }
}

export const showMoreAddresses = (number = 10) => {
  return {
    type: 'SHOW_MORE_ADDRESSES',
    number
  }
}

export const combineAddresses = (id_list) => {
  return {
    type: 'COMBINE_ADDRESSES',
    id_list
  }
}

export const refreshAddressList = () => {
  return {
    type: 'REFRESH_ADDRESS_LIST'
  }
}