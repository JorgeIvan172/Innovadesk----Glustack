// ProductComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    // Otros detalles del producto...
  };
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price } = product;

  return (
    <View key={id} style={styles.productContainer}>
      <Text>{name}</Text>
      <Text>${price}</Text>
      {/* Otros detalles del producto... */}
    </View>
  );
};

const styles = {
  productContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
};

export default ProductComponent;
