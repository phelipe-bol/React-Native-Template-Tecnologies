import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TesteRedux, RestAsync} from '../reduxes/slice';
import {Container, Text, Buttom, TextInput} from '../style/styled';
import {saveProduct, delProduct} from '../dataBase/actionDb';
import {getProduct} from '../dataBase/db';
import Comp2 from '../components/comp2';
import Comp3 from '../components/comp3';

const Main = ({navigation}) => {
  const [Input, setInput] = useState('');
  const [InputDb, setInputDb] = useState('');
  const [RescueDb, setRescueDb] = useState([]);

  //capture state
  const TextRedux = useSelector(state => state.input.text);
  //dispatch action
  const action = useDispatch();

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    const data = await getProduct();
    setRescueDb(data);
  }
  return (
    <Container>
      <TextInput onChangeText={setInputDb} value={InputDb} testID="bd-input" />
      <Buttom
        onPress={() => {
          saveProduct(InputDb, loadProduct);
          setInputDb('');
        }}
        testID="bd-push">
        <Text>Save DataBase</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          delProduct(RescueDb, loadProduct);
        }}
        testID="bd-dell">
        <Text>Deleta o Primeiro</Text>
      </Buttom>
      <TextInput onChangeText={setInput} value={Input} testID="input-redux" />
      <Buttom
        onPress={() => {
          setInput('');
          //redux
          action(TesteRedux(Input));
          //axius
          !Input && RestAsync(action);
        }}
        testID="save-redux">
        <Text>Salvar no Redux</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('CompStateRedux');
        }}
        testID="nv-redux">
        <Text>Mudar de tela</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('SharePdf');
        }}
        testID="nv-pdf">
        <Text>Pagina de compartilhamento de PDF</Text>
      </Buttom>
      <Buttom
        onPress={() => {
          navigation.navigate('StoreImage');
        }}
        testID="nv-image">
        <Text>Pagina de Salvar imagem</Text>
      </Buttom>
      <Text testID="redux-text">{TextRedux}</Text>
      <Icon name="home" size={30} color="#900" />
      <Text testID="bd-text">
        {RescueDb.length ? RescueDb[0].name : 'Não há Produtos Cadastrados'}
      </Text>
      <Comp2 />
      <Comp3 />
    </Container>
  );
};

export default Main;
