import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  font-size: 12px;
  color: red;
`;

const Error = ({message, children}) => {
  return (
    <Message message={message}>
        {children}
    </Message>
  )
}

export default Error;