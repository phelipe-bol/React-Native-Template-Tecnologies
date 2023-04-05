import Realm from 'realm';
import ProductsSchema from './productsSchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [ProductsSchema],
    schemaVersion: 2,
  });

  return realm;
};
