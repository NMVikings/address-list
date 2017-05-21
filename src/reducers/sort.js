const sortAddresses = (data, {id = 'name', direction = true}) => {
  const compare = (obj1, obj2) => {
    if (obj1[id][0] > obj2[id][0]) {
      return direction ? 1 : -1;
    }
    if (obj1[id][0] < obj2[id][0]) {
      return direction ? -1 : 1;
    }
    return 0;
  };
  return data.sort(compare);
};

const sort = (state = {id: 'name', direction: true}, {type, id, direction}) => {
  switch (type) {
  case 'SORT_ADDRESS_LIST':
    return {id: id, direction: direction};
  case 'REFRESH_ADDRESS_LIST':
    return {id: 'name', direction: true};
  default:
    return state;
  }
};


export default sort;
export {
  sortAddresses
};