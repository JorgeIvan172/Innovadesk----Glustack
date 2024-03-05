// ProductComponent.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity} from 'react-native';
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
  Text
} from '@gluestack-ui/themed';

import { useCart } from '../Context/CartContext';

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
  const navigation = useNavigation();
  const {addToCart} = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const OneProduct = () => {
    navigation.navigate('OneProduct', { product });
  };
  
  return (
    <>
    <TouchableOpacity onPress={OneProduct}>
    <Box backgroundColor={'#B35340'} key={id} padding={'$3'} margin={'$2'} borderWidth={'$2'} borderColor='#ccc' borderRadius={10} >
      
      <View  style={{ flexDirection: 'row' }}>
      <Image
      width={100}
      height={100}
      resizeMode= 'stretch'
      borderRadius={5}
        source={{ uri: img }}
      />
      
      <View style={{ marginLeft: 10 }}>
      <Text size="xl" color='black' fontWeight='bold'>{name}</Text>
      <Text size="md" color='black' fontWeight='bold'>${price}</Text>

      <Button marginTop={'$1'} size='sm' backgroundColor={'#233342'} width={'$32'} onPress={handleAddToCart}>
      <ButtonText>Add to Car +</ButtonText>
      </Button>

      </View>
      </View>

      {/* Otros detalles del producto... */}
    </Box>
    </TouchableOpacity>
    </>
  );
};



export default ProductComponent;
