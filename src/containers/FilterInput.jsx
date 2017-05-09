import { connect } from 'react-redux';
import { filterAddressList } from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = ( dispatch, { name }) => {
  return {
    onChange: (e) => {
      dispatch(filterAddressList(name, e.target.value))
    }
  }
}
const FilterInput = connect(null, mapDispatchToProps)(Input);

export default FilterInput;