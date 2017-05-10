import React from 'react';
import { connect } from 'react-redux';
import { highlightText } from './Highlighter';

const AddressListItem = ({ text }) => {
  return (
    <td>
      {text}
    </td>
  )
}

const mapStateToProps = ({ filters }, { text }) => {
  const highlightedText = highlightText(text, filters.global);
  return {
    text: <span>{highlightedText}</span>
  };
}
export default connect(mapStateToProps)(AddressListItem);