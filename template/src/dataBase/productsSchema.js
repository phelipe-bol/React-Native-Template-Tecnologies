const ProductsSchema = {
  name: 'Products',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    description: 'string',
    amount: 'float',
    measure: 'string',
    image: 'string',
  },
};

export default ProductsSchema;
