import React from 'react';
import { connect } from 'react-redux';
import AddressBook from '../components/AddressBook';

const mapStateToProps = (state) => {
  return {
    data: state.data,
    keys: Object.keys(state.data[0])
  }
}
const AddressBookWrapper = connect(mapStateToProps, null)(AddressBook);

export default AddressBookWrapper;