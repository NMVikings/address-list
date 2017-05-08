import React from 'react';
import { connect } from 'react-redux';
import { showMoreAddresses } from '../actions';

let ShowMoreButton = ({ isDisabled , dispatch }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={() => dispatch(showMoreAddresses())}
    >
      Show more
    </button>
  )
}
const mapStateToProps = (state) => {
  return {
    isDisabled: state.visibleData.length === state.filteredData.length
  }
}
ShowMoreButton = connect(mapStateToProps)(ShowMoreButton);

export default ShowMoreButton;