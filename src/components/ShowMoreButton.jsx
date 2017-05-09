import React from 'react';
import { connect } from 'react-redux';
import { showMoreAddresses } from '../actions';
import Button from './Button';

const mapStateToProps = ({ numberOfVisibleAddresses }, { numberOfAvailableAddresses }) => {
  return {
    isDisabled: numberOfAvailableAddresses <= numberOfVisibleAddresses
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onClick: () =>
      dispatch(showMoreAddresses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);