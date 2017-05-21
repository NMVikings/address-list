import { connect } from 'react-redux';
import { filterAddressList } from '../actions';
import { getFilterValue } from '../reducers';
import Input from '../components/Input';

const mapDispatchToProps = ( dispatch, { name }) => {
  return {
    onChange: (e) => {
      dispatch(filterAddressList(name, e.target.value));
    }
  };
};

const mapStateToProps = (state, { name }) => {
  const value = getFilterValue(state, name);
  if (value === undefined) {
    return { value: '' };
  }
  return {
    value: getFilterValue(state, name)
  };
};

const FilterInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default FilterInput;