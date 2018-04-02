import React from 'react';
import FontAwesome from 'react-fontawesome';

const Loading = props => {
  const { icon, onClick, children, ...rest} = props;
  return (
    <div>
      <FontAwesome name={icon} />
      <Button onClick={onClick} {...rest}>
        Cancel
      </Button>
    </div>
  );
}

export default Loading;