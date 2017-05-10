import React from 'react';
import { connect } from 'react-redux';
import { updateCombineList } from '../actions';

const AddressListCheckbox = ({ id, onClick = (e) => console.log(e.target.value) }) => {
  return (
    <td>
      <input name='combine' type='checkbox' value={id} onClick={onClick} />
    </td>
  )
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: (e) => dispatch(updateCombineList(e.target.value))
  }
}
export default connect(null, mapDispatchToProps)(AddressListCheckbox);