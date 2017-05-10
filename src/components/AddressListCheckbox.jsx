import React from 'react';
import { connect } from 'react-redux';
import { updateCombineList } from '../actions';

const AddressListCheckbox = ({ isChecked, id, onClick }) => {
  return (
    <td>
      <input
        id={id}
        name='combine'
        type='checkbox'
        checked={isChecked}
        value={id}
        onClick={onClick}
      />
    </td>
  )
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: (e) => dispatch(updateCombineList(e.target.value))
  }
}
const mapStateToProps = ({ combineList }, { id }) => {
  return {
    isChecked: combineList.includes(String(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressListCheckbox);