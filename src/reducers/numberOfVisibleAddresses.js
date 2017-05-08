export default (state = 10, action) => {
  switch (action.type) {
    case 'SHOW_MORE_ADDRESSES':
      return state + action.number;
    default:
      return state;
  }
}