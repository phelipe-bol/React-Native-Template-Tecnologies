import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Container, Text, Buttom, TextInput} from '../style/styled';

import Comp4 from '../components/comp4';
import Comp5 from '../components/comp5';

import {TesteRedux2} from '../reduxes/slice';

const CompStateRedux = ({navigation}) => {
  const [Input, setInput] = useState('');

  const TextRedux = useSelector(state => state.exit.text);
  const action = useDispatch();

  return (
    <Container>
      <TextInput onChangeText={setInput} value={Input} />
      <Buttom
        onPress={() => {
          setInput('');
          action(TesteRedux2(Input));
        }}>
        <Text>Page2 State</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('Main');
        }}>
        <Text>Mudar de tela</Text>
      </Buttom>
      <Text>{TextRedux}</Text>
      <Comp4 />
      <Comp5 />s
    </Container>
  );
};

export default CompStateRedux;
