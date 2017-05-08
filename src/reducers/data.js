export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADDRESSES':
      return [...state, ...action.data];
    case 'COMBINE_ADDRESSES':
      return state;
    default:
      return state;
  }
}