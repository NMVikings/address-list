import React from 'react';

let i = 0;
const Highlighter = (string) => {
  return (
    <mark key={i++}>{string}</mark>
  );
};

const highlight = (element, string) => {
  const highlightText = (text) =>
    text.split(string).reduce((prevAcc, item, index) => {
      if (index === 0) {
        return [...prevAcc, item];
      }
      return [...prevAcc, Highlighter(string), item];
    }, []);

  if (typeof element === 'string') {
    return highlightText(element);
  } else if (element instanceof Array) {
    return highlightText(element.join('\n\n'));
  }

  return element;
};

export {
  highlight
};