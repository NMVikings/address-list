import React from 'react';
import { connect } from 'react-redux';
import AddressBook from '../components/AddressBook';

const mapStateToProps = ({data, numberOfVisibleAddresses, filters}) => {
  const filteredData = Object.keys(filters).reduce((previousData, item) => filters[item](previousData), data);
  const visibleData = filteredData.slice(0, numberOfVisibleAddresses);
  return {
    data: visibleData,
    numberOfAvailableAddresses: filteredData.length,
    keys: Object.keys(data[0])
  }
}
const AddressBookWrapper = connect(mapStateToProps, null)(AddressBook);

export default AddressBookWrapper;