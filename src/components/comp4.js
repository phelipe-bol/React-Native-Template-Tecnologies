import React from 'react';
import {Container, Text} from '../style/styled';
import {useSelector} from 'react-redux';

const Comp4 = () => {
  const TextRedux = useSelector(state => state.exit.text);

  return (
    <Container>
      <Text>{TextRedux}</Text>
    </Container>
  );
};

export default Comp4;
