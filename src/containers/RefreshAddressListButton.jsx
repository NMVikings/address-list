import { connect } from 'react-redux';
import { refreshAddressList } from '../actions';
import Button from '../components/Button'

const mapDispatchToProps = ( dispatch ) => {
  return {
    onClick: () => {
      dispatch(refreshAddressList())
    }
  }
}

const RefreshAddressListButton = connect(null, mapDispatchToProps)(Button);

export default RefreshAddressListButton;