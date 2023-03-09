// importação de biblioteca externa
import styled from 'styled-components/native';

//folha de estilos globais do projeto

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: darkblue;
`;

export const Buttom = styled.TouchableOpacity`
  height: 10%;
  justify-content: center;
  margin: 0 6% 0 6%;
  background-color: blue;
  border-radius: 10px;
`;

export const Text = styled.Text`
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  height: 10%;
  text-align: center;
  color: white;
  background-color: blue;
  height: 10%;
  justify-content: center;
  margin: 0 6% 6% 6%;
  border-radius: 10px;
`;

export const ContainerFilm = styled.View`
  height: 50px;
  justify-content: center;
  background-color: blue;
  margin: 2% 6% 2% 6%;
  border-radius: 10px;
`;

export const ContainerFinal = styled.TouchableOpacity`
  height: 70px;
  background-color: blue;
  padding-top: 7px;
`;
