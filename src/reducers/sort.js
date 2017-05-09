const compareGenerator = (id = 'name', direction = true) => {
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

const sortGenerator = (compare) => (data) => data.sort(compare);

const defaultState = sortGenerator(compareGenerator());

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SORT_ADDRESS_LIST':
      return sortGenerator(compareGenerator(action.id, action.direction))
    default:
      return state;
  }
}
