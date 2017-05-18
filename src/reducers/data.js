const combineAddresses = (addresses) => {
  return addresses.reduce((newObj, item) => {
    const mergeObjects = (newObj, key) => {
      if (newObj.hasOwnProperty(key)) {
        return {...newObj, [key]: [...newObj[key], ...item[key]]};
      } else if (!newObj.hasOwnProperty(key)) {
        return {...newObj, [key]: [...item[key]]};
      }
      return newObj;
    };
    return Object.keys(item).reduce(mergeObjects, newObj);
  }, {});
};


const addIds = (array) =>
  array.map((item, index) => ({...item, id: String(index)}));


const dataReducer = (state = [], action) => {
  let addressesToCombine, newAddress, newState;
  switch (action.type) {
  case 'ADD_ADDRESSES':
    newState = addIds([...state, ...action.data]);
    return  newState;
  case 'COMBINE_ADDRESSES':
    if (action.combineList.length === 0) {
      return state;
    }
    addressesToCombine = state.filter((item) => action.combineList.includes(String(item.id)));
    newAddress = combineAddresses(addressesToCombine);
    newState = [...state.filter(item => !addressesToCombine.includes(item)), newAddress];
    return newState;
  case 'REFRESH_ADDRESS_LIST':
    return addIds(action.data);
  default:
    return state;
  }
};

export default dataReducer;