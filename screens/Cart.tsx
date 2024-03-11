import React from 'react';
import { useCart } from '../Context/CartContext';
import {
  Box,
  VStack,
  Heading,
  Button,
  ButtonText,
  Image,
  Text,
} from '@gluestack-ui/themed';

const CartComponent = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <>
      <Box flex={1} backgroundColor={'$black'} paddingTop={'$32'} paddingBottom={'$32'}>
        <VStack space='xs' pb='$4' alignItems='center'>
          <Heading lineHeight={32} color={'$white'}>
            Cart Items
          </Heading>

          {cart.length === 0 ? (
            <Text size="xl" color='white' fontWeight='bold'>Your cart is empty.</Text>
          ) : (
            cart.map((item) => (
              <Box
                backgroundColor={'#B35340'}
                padding={'$3'}
                margin={'$2'}
                borderWidth={'$2'}
                borderColor='#ccc'
                borderRadius={10}
                flexDirection='row'
                // preguntarle al profe
                key={item.product.id}
              >
                <Image
                  source={{ uri: item.product.img }}
                  width={80}
                  height={80}
                  borderRadius={5}
                  marginRight={10}
                />
                <VStack alignItems="flex-start">
                  <Text color='white'>
                    {item.product.name} - ${item.product.price}
                  </Text>
                  <Text color='white'>
                    Quantity: {item.quantity}
                  </Text>
                  <Button
                    size="xs"
                    marginTop={'$1.5'}
                    //action="negative"
                    bgColor='#233342'
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => handleRemoveFromCart(item.product.id)}
                  >
                    <ButtonText>Delete</ButtonText>
                  </Button>
                </VStack>
              </Box>
            ))
          )}

          <Box 
           backgroundColor={'#B35340'}
           padding={'$3'}
           margin={'$2'}
           borderWidth={'$2'}
           borderColor='#ccc'
           borderRadius={10}
           flexDirection='row'>

          <Text size="xl" color='black' fontWeight='bold' alignItems="center" marginRight={'$2'}>Total: ${calculateTotal()}</Text>

          <Button
                    size="xs"    
                    //action="negative"
                    bgColor='#233342'
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => handleRemoveFromCart(item.product.id)}
                  >
                    <ButtonText>Pay</ButtonText>
                  </Button>


          </Box>

        </VStack>
        
      </Box>

      <>
      
      </>
    </>
  );
};

export default CartComponent;
