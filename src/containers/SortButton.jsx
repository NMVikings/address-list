import React from 'react';
import { connect } from 'react-redux';
import { sortAddressList } from '../actions'
import Button from '../components/Button';



const mapDispatchToProps = ( dispatch, { id, direction }) => {
  return {
    onClick: () => {
      dispatch(sortAddressList(id, direction))
    }
  }
}

export default connect(null, mapDispatchToProps)(Button);