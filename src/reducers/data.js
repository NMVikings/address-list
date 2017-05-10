export default (state = [], action) => {


  const combineAddresses = (addresses) => {
    return addresses.reduce((newObj, item) => {
      return Object.keys(item).reduce((newObj, key) => {
        if (newObj.hasOwnProperty(key)) {
          if (key === 'id') {
            return {...newObj, [key]: [...newObj[key], item[key]]}
          }
          return {...newObj, [key]: `${newObj[key]}\n\n${item[key]}`}
        } else if (!newObj.hasOwnProperty(key)){
          if (key === 'id') {
            return {...newObj, [key]: [item[key]]}
          }
          return {...newObj, [key]: item[key]}
        }
        return newObj
      }, newObj)
    }, {});
  }

  const addIds = (array) =>
    array.map((item, index) => ({...item, id: String(index)}));


  switch (action.type) {
    case 'ADD_ADDRESSES':
      const State = addIds([...state, ...action.data]);
      return State;
    case 'COMBINE_ADDRESSES':
      if (action.combineList.length === 0) {
        return state;
      }
      const addressesToCombine = state.filter((item) => action.combineList.includes(String(item.id)));
      const newAddress = combineAddresses(addressesToCombine);
      const newState = [...state.filter(item => !addressesToCombine.includes(item)), newAddress];
      return newState;
    case 'REFRESH_ADDRESS_LIST':
      return action.data;
    default:
      return state;
  }
}