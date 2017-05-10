import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { combineAddresses } from '../actions'

const CombineAddressesButton = ({ onClick, combineList }) => {
  return (
    <Button onClick={() => onClick(combineList)}>Combine</Button>
  )
}
const mapStateToProps = ({ combineList }) => {
  return {
    combineList: combineList
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    onClick: (ids) =>
      dispatch(combineAddresses(ids))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombineAddressesButton);