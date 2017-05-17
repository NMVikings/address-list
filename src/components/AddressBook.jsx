import React from 'react';
import { connect } from 'react-redux';
import { createFilters } from '../reducers/filters';
import { sortAddresses } from '../reducers/sort';
import AddressList from './AddressList';
import AddressBookHeader from './AddressBookHeader';
import Button from './Button';

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVisibleAddresses: 10
    };
  }

  render() {
    const { numberOfAvailableAddresses, data, keys } = this.props;
    const ButtonData = {
      isDisabled: numberOfAvailableAddresses === this.state.numberOfVisibleAddresses,
      onClick: this.showMoreAddresses
    };
    const visibleData = data.slice(0, this.state.numberOfVisibleAddresses);

    return (
      <div>
        <table>
          <AddressBookHeader keys={keys}/>
          <AddressList data={visibleData}/>
        </table>
        <Button {...ButtonData}>
          <span>Show More</span>
        </Button>
      </div>
    );
  }

  showMoreAddresses = () => {
    const {numberOfVisibleAddresses} = this.state;
    const {numberOfAvailableAddresses} = this.props;
    const newNumber = numberOfVisibleAddresses + 10 > numberOfAvailableAddresses ?
      numberOfAvailableAddresses :
      numberOfVisibleAddresses + 10;
    this.setState({
      numberOfVisibleAddresses: newNumber
    });
  };

  componentWillReceiveProps({ numberOfAvailableAddresses }) {
    const { numberOfVisibleAddresses } = this.state;

    if (numberOfAvailableAddresses <= numberOfVisibleAddresses) {
      this.setState({
        numberOfVisibleAddresses: numberOfAvailableAddresses
      });
    }
    if (numberOfAvailableAddresses >  numberOfVisibleAddresses) {
      if (numberOfVisibleAddresses > 10) {
        return;
      }
      this.setState({
        numberOfVisibleAddresses: (numberOfAvailableAddresses > 10) ? 10 : numberOfAvailableAddresses
      });
    }
  }
}


const mapStateToProps = ({data, sort, filters}) => {
  const filteredData = createFilters(filters).reduce((previousData, filter) => filter(previousData), data);
  const sortedData = sortAddresses(filteredData, sort.id, sort.direction);
  return {
    data: sortedData,
    numberOfAvailableAddresses: filteredData.length,
    keys: Object.keys(data[0])
  };
};

export default connect(mapStateToProps, null)(AddressBook);