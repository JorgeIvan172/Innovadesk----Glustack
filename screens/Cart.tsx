// Otro componente
import React from 'react';
import { useCart } from '../Context/CartContext'; // Ajusta la ruta correcta
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

const AnotherComponent = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Box flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
      <VStack space='xs' pb='$4' alignItems='center'>
      <Heading lineHeight={32} color={'$white'}>Cart Items</Heading>
      <Box>
        {cart.map((item) => (
          <Text color='white' key={item.id} marginTop={'$3'} marginLeft={'$10'}>
            {item.name} - ${item.price}

            <Button
                  size="xs"
                  variant="outline"
                  action="negative"
                  isDisabled={false}
                  isFocusVisible={false}
                  onPress={handleRemoveFromCart}
                >
                  <ButtonText>Delete</ButtonText>
            </Button>

          </Text>
        ))}
      </Box>
      </VStack>
      </Box>
  );
};

export default AnotherComponent;
