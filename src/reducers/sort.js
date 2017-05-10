export const createSorter = (id, direction) => {
  const createComparator = (id = 'name', direction = true) => {
    const compare = (obj1, obj2) => {
      if (obj1[id] > obj2[id]) {
        return direction ? 1 : -1;
      }
      if (obj1[id] < obj2[id]) {
        return direction ? -1 : 1;
      }
      return 0;
    }
    return compare;
  }
  const sorter = (data) => data.sort(createComparator(id, direction))
  return sorter;
}

export default (state = {id: 'name', direction: true}, action) => {
  switch (action.type) {
    case 'SORT_ADDRESS_LIST':
      const {id, direction} = action;
      return {id: id, direction: direction};
    case 'REFRESH_ADDRESS_LIST':
      return {id: 'name', direction: true};
    default:
      return state;
  }
}
