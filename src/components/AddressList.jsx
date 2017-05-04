import React, { Component } from 'react';

const AddressList = ({data}) => {
  const list = data.map(item => <ul>{Object.keys(item).map(key => <li>{key}: {item[key]}</li>)}</ul>);
  return (<div>{list}</div>);
}
export default AddressList;