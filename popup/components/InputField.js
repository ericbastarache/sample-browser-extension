import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #a9a9a9;
  width: 100%;
`;

const InputField = props => {
  const { type, ...rest} = props;
  return (
    <Input type={type} {...rest}/>
  )
}

export default InputField;