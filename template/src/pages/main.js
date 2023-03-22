import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TesteRedux, RestAsync} from '../reduxes/slice';
import {Container, Text, Buttom, TextInput} from '../style/styled';
import Comp2 from '../components/comp2';
import Comp3 from '../components/comp3';

const Main = ({navigation}) => {
  const [Input, setInput] = useState('');

  //capture state
  const TextRedux = useSelector(state => state.input.text);
  //dispatch action
  const action = useDispatch();

  return (
    <Container>
      <TextInput onChangeText={setInput} value={Input} />
      <Buttom
        onPress={() => {
          setInput('');
          //redux
          action(TesteRedux(Input));
          //axius
          !Input && RestAsync(action);
        }}>
        <Text>Main State</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('compStateRedux');
        }}>
        <Text>Mudar de tela</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('SharePdf');
        }}>
        <Text>Pagina de compartilhamento de PDF</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('StoreImage');
        }}>
        <Text>Pagina de Salvar imagem</Text>
      </Buttom>
      <Text>{TextRedux}</Text>
      <Icon name="home" size={30} color="#900" />
      <Comp2 />
      <Comp3 />
    </Container>
  );
};

export default Main;

//imagens

//Jest
//react testing library
