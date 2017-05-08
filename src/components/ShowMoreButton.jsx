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
const mapStateToProps = ({ data, numberOfVisibleAdresses }) => {
  return {
    isDisabled: data.length === numberOfVisibleAdresses
  }
}

export default connect(mapStateToProps)(ShowMoreButton);