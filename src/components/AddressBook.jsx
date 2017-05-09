import React from 'react';
import AddressList from './AddressList';
import AddressBookHeader from './AddressBookHeader';
import Button from './Button';

class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVisibleAddresses: 10
    }
    this.showMoreAddresses = this.showMoreAddresses.bind(this);
  }

  showMoreAddresses() {
    const newNumber = this.state.numberOfVisibleAddresses + 10 > this.props.numberOfAvailableAddresses ?
      this.props.numberOfAvailableAddresses :
      this.state.numberOfVisibleAddresses + 10;
    this.setState({
      numberOfVisibleAddresses: newNumber
    })
  }

  componentWillReceiveProps({ numberOfAvailableAddresses }) {
    if (numberOfAvailableAddresses <= this.state.numberOfVisibleAddresses) {
      this.setState({
        numberOfVisibleAddresses: numberOfAvailableAddresses
      })
    }
    if (numberOfAvailableAddresses > this.state.numberOfVisibleAddresses) {
      if (this.state.numberOfVisibleAddresses > 10) {
        return;
      }
      this.setState({
        numberOfVisibleAddresses: (numberOfAvailableAddresses > 10) ? 10 : numberOfAvailableAddresses
      })
    }
  }
  render() {
    const { numberOfAvailableAddresses, data, keys } = {...this.props};
    const ShowMoreButtonData = {
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
        <Button {...ShowMoreButtonData}>
          <span>Show More</span>
        </Button>
      </div>
    );
  }
}
export default AddressBook;