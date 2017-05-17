import { connect } from 'react-redux';
import { filterAddressList } from '../actions';
import { getValue } from '../reducers/filters';
import Input from '../components/Input';

const mapDispatchToProps = ( dispatch, { name }) => {
  return {
    onChange: (e) => {
      dispatch(filterAddressList(name, e.target.value));
    }
  };
};

const mapStateToProps = ({ filters }, { name }) => {
  const value = getValue(filters, name);
  if (value === undefined) {
    return { value: '' };
  }
  return {
    value: getValue(filters, name)
  };
};

const FilterInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default FilterInput;