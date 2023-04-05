import {Alert} from 'react-native';

import {getRealm} from './realmConnect';
import {generateId} from '../services/generateId';

export const getProduct = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Products');
  return entries;
};

// export const saveProduct = async (value, entry = {}) => {
export const saveProductDb = async value => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: generateId(),
        name: value.name,
        description: value.description,
        amount: value.amount,
        measure: value.measure,
        image: value.image,
      };

      realm.create('Products', data, true);
    });
  } catch (error) {
    console.error(
      'Products :: error on save object: ',
      JSON.stringify(data),
      error,
    );
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};

export const deleteProductDb = async product => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(product);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object: ',
      error,
      JSON.stringify(product),
    );
    Alert.alert('Erro ao deletar os dados de lançamento.');
  }
};
