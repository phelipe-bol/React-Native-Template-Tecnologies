import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import store from '../../reduxes/store';
import Main from '../main';
import {getRealm} from '../../dataBase/realmConnect';

describe('Main', () => {
  //Salvar informação no banco realm

  it('Deve salvar informações no banco de dados quando o botão for pressionado', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const input = getByTestId('bd-input');
    const button = getByTestId('bd-push');
    const textBd = getByTestId('bd-text');

    fireEvent(input, 'onChangeText', 'Test-db');

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(textBd.props.children).toEqual('Test-db');
  });

  //Deletar informação no banco realm
  it('Deve deletar informações no banco de dados quando o botão for pressionado', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const button = getByTestId('bd-dell');
    const textBd = getByTestId('bd-text');

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(textBd.props.children).toEqual('Não há Produtos Cadastrados');
  });
  //Salvar informação no Redux

  it('Deve salvar informações no Redux quando o botão for pressionado', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    const input = getByTestId('input-redux');
    fireEvent.changeText(input, 'Test redux');

    const saveButton = getByTestId('save-redux');

    await act(async () => {
      await fireEvent.press(saveButton);
    });

    const textRedux = getByTestId('redux-text');
    expect(textRedux.props.children).toBe('Test redux');
  });

  //Salvar informação de API no Redux
  it('Deve buscar lista de API Redux quando o botão for pressionado', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    const saveButton = getByTestId('save-redux');
    const text = getByTestId('redux-text');

    await act(async () => {
      await fireEvent.press(saveButton);
      await new Promise(resolve => setTimeout(resolve, 3000));
    });

    expect(text.props.children).toBe('Deadpool');
  });

  //Navegar para Redux
  it('Deve navegar para página Redux quando o botão for pressionado', async () => {
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <Provider store={store}>
        <Main navigation={navigation} />{' '}
      </Provider>,
    );
    const button = getByTestId('nv-redux');

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('CompStateRedux');
  });
  //Navegar para imagem

  it('Deve navegar para página de Salvar Imagem quando o botão for pressionado', async () => {
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <Provider store={store}>
        <Main navigation={navigation} />
      </Provider>,
    );
    const button = getByTestId('nv-image');

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('StoreImage');
  });
  //Navegar para compartilhar pdf
  it('Deve navegar para página compartilhar PDF quando o botão for pressionado', async () => {
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <Provider store={store}>
        <Main navigation={navigation} />
      </Provider>,
    );
    const button = getByTestId('nv-pdf');

    await act(async () => {
      await fireEvent.press(button);
    });

    expect(navigation.navigate).toHaveBeenCalledWith('SharePdf');
  });
  //apagar banco realm

  beforeEach(async () => {
    const realm = await getRealm();
    realm.write(() => {
      realm.deleteAll();
    });
  });
});
