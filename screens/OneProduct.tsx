import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Context/CartContext';

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

const OneProduct = ({ route }) => {
  const navigation = useNavigation();
  const { id, name, price, img } = route.params.product;
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAddToCart = () => {
    // Llamar a addToCart con el producto actual
    addToCart({
      id,
      name,
      price,
      img
    });
  };

  return (
    <>
      <Center marginTop={'$12'}>
        <Text size="3xl" color={"black"} fontWeight='bold'>{name}</Text>
        <Image source={{ uri: img }} 
          borderRadius={8}
          borderWidth={'$4'}
          borderColor='grey'
          width={300}
          height={300}
          marginTop={'$6'}
          marginBottom={'$5'}
        />
        <Text size="2xl" color={"black"} fontWeight='bold' marginBottom={'$2'}>${price}</Text>
        
        <Button marginTop={'$1'} size='sm' backgroundColor={'#233342'} width={'$56'} marginBottom={'$2'} onPress={handleAddToCart}>
          <ButtonText>Add to Cart +</ButtonText>
        </Button>
        
        <Box flexDirection='row'>
          <Button variant='link' p='$0' size='sm' onPress={handleBackPress}>
            <ButtonText color={'#B35340'} size='xl'>
              Back
            </ButtonText>
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default OneProduct;
