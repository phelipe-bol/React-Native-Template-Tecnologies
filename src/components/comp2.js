import React from 'react';
import {Container, Text} from '../style/styled';
import {useSelector} from 'react-redux';

const Comp2 = () => {
  const TextRedux = useSelector(state => state.input.text);

  return (
    <Container>
      <Text>{TextRedux}</Text>
    </Container>
  );
};

export default Comp2;
