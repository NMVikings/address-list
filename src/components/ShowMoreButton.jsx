import React from 'react';
import { connect } from 'react-redux';
import { showMoreAddresses } from '../actions';

const ShowMoreButton = ({ isDisabled , dispatch }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={() => dispatch(showMoreAddresses())}
    >
      Show more
    </button>
  )
}
const mapStateToProps = ({ numberOfVisibleAddresses }, { numberOfAvailableAddresses }) => {
  return {
    isDisabled: numberOfAvailableAddresses <= numberOfVisibleAddresses
  }
}

export default connect(mapStateToProps)(ShowMoreButton);