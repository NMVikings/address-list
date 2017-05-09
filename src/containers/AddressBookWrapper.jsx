import React from 'react';
import { connect } from 'react-redux';
import AddressBook from '../components/AddressBook';

const mapStateToProps = ({data, filters}) => {
  const filteredData = Object.keys(filters).reduce((previousData, item) => filters[item](previousData), data);
  return {
    data: filteredData,
    numberOfAvailableAddresses: filteredData.length,
    keys: Object.keys(data[0])
  }
}
const AddressBookWrapper = connect(mapStateToProps, null)(AddressBook);

export default AddressBookWrapper;