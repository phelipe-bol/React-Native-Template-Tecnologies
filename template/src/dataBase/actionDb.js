import {Alert} from 'react-native';
import {saveProductDb, deleteProductDb} from './db';

export function saveProduct(InputDb, load) {
  const data = {
    name: String(InputDb),
    description: 'Teste',
    amount: 0.0,
    measure: 'Teste',
    image: 'Teste',
  };

  saveProductDb(data);
  load();
  // onClose();
}

export const delProduct = (ResgateDb, load) => {
  Alert.alert(
    'Atenção',
    'Tem certeza que deseja apagar esse produto?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteProductDb(ResgateDb[0]);
          load();
          // onClose();
        },
      },
    ],
    {cancelable: true},
  );
};

export const onClose = navigation => {
  navigation.goBack();
};
