import React from 'react';
import { connect } from 'react-redux';
import { createFilters } from '../reducers/filters';
import { createSorter } from '../reducers/sort';
import AddressBook from '../components/AddressBook';

const mapStateToProps = ({data, sort, filters}) => {
  const filteredData = createFilters(filters).reduce((previousData, filter) => filter(previousData), data);
  const sortedData = createSorter(sort.id, sort.direction)(filteredData);
  return {
    data: sortedData,
    numberOfAvailableAddresses: filteredData.length,
    keys: Object.keys(data[0])
  }
}
const AddressBookWrapper = connect(mapStateToProps, null)(AddressBook);

export default AddressBookWrapper;