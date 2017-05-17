import { connect } from 'react-redux';
import { sortAddressList } from '../actions';
import Button from '../components/Button';



const mapDispatchToProps = ( dispatch, { id, direction }) => {
  return {
    onClick: () => {
      dispatch(sortAddressList(id, direction));
    }
  };
};

const mapStateToProps = ({ sort }, { id, direction}) => {
  return {
    isActive: sort.id === id && sort.direction === direction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);