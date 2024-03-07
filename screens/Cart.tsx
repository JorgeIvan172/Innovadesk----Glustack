// Otro componente
import React from 'react';
import { useCart } from '../Context/CartContext'; // Ajusta la ruta correcta
import {
    Box,
    VStack,
    Heading,
    Select, SelectTrigger, SelectInput, SelectItem, SelectIcon, Icon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, 
    Button, SelectDragIndicator, 
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
      
        {cart.map((item) => (
          <Box backgroundColor={'#B35340'} padding={'$3'} margin={'$2'} borderWidth={'$2'} borderColor='#ccc' borderRadius={10} flexDirection='row' maxWidth='$96'>
            <Image
                source={{ uri: item.img }}  // Ajusta el nombre de la propiedad de la imagen según tu estructura de datos
                width={50}
                height={50}
                borderRadius={5}
                marginRight={10}
              />
          <Text color='white' key={item.id} marginTop={'$3'}>
            {item.name} - ${item.price}
            <Button
                  size="xs"
                  marginLeft={'$1.5'}
                  action="negative"
                  isDisabled={false}
                  isFocusVisible={false}
                  onPress={() => handleRemoveFromCart(item.id)}
                >
                  <ButtonText>Delete</ButtonText>
            </Button>


          </Text>
          </Box>
        ))}
      </VStack>
      </Box>
  );
};

export default AnotherComponent;
