// ProductComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import {
  Box,
  VStack,
  Heading,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  Center,
} from '@gluestack-ui/themed';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    img: string
    // Otros detalles del producto...
  };
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { id, name, price, img } = product;

  return (
    <Box key={id} padding={'$3'} margin={'$2'} borderWidth={'$2'} borderColor='#ccc' borderRadius={10} >
      
      <View  style={{ flexDirection: 'row' }}>
      <Image
      width={100}
      height={100}
      resizeMode= 'stretch'
        source={{ uri: img }}
      />
      
      <View style={{ marginLeft: 10 }}>
      <Text>{name}</Text>
      <Text>${price}</Text>
      </View>
      </View>

      {/* Otros detalles del producto... */}
    </Box>
  );
};



export default ProductComponent;
