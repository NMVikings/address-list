import React from 'react';

let i = 0;
export const Highlighter = (string) => {
  return (
    <mark key={i++}>{string}</mark>
  );
};

export const highlightText = (text, string) => {
  return text.split(string).reduce((prevAcc, item, index) => {
    if (index === 0) {
      return [...prevAcc, item];
    }
    return [...prevAcc, Highlighter(string), item];
  }, []);
};