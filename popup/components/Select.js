import React from 'react';

const Select = props => {
  const { name, children, ...rest} = props;
  return (
    <select name={name}>
      {children}
    </select>
  )
}

export default Select;