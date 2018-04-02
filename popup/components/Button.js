import React from 'react';

const Button = props => {
  const { onClick, children, ...rest} = props;
  return (
    <button {...rest} onClick={onClick}>
      {children}
    </button>
  ) 
}

export default Button;