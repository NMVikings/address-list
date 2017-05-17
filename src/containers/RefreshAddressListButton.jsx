import { connect } from 'react-redux';
import { refreshAddressList } from '../actions';
import Button from '../components/Button';
import data from '../data/address-list.json';

const mapDispatchToProps = ( dispatch ) => {
  return {
    onClick: () => {
      dispatch(refreshAddressList(data));
    }
  };
};

const RefreshAddressListButton = connect(null, mapDispatchToProps)(Button);

export default RefreshAddressListButton;