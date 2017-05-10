import React from 'react';
import { connect } from 'react-redux';
import FilterInput from './FilterInput';

const GlobalFilterInput = () => {
  return <FilterInput name={'global'} />;
}

export default GlobalFilterInput;