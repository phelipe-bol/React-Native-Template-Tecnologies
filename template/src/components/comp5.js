import React from 'react';
import {Container, Text} from '../style/styled';
import {useSelector} from 'react-redux';

const Comp5 = () => {
  const TextRedux = useSelector(state => state.exit.text);

  return (
    <Container>
      <Text>{TextRedux}</Text>
    </Container>
  );
};

export default Comp5;
