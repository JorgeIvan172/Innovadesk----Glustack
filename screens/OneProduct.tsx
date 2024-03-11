import React from 'react'
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  
 // ... (importaciones)

const OneProduct = ({ route }) => {
  const navigation = useNavigation();
  const { id, name, price, img } = route.params.product;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <Center marginTop={'$56'}>
        {/* Pasa la URL de la imagen a la propiedad 'source' del componente Image */}
        <Image source={{ uri: img }} 
        width={300}
        height={300}
         />
        
        <Text size="3xl" color={"black"} fontWeight='bold'>{name}</Text>
        <Text size="2xl" color={"black"} fontWeight='bold'>${price}</Text>
        {/* Otros detalles del producto... */}

        <Button marginTop={'$1'} size='sm' backgroundColor={'#233342'} width={'$56'} >
      <ButtonText>Add to Car +</ButtonText>
      </Button>
        
        <Box flexDirection='row'>
          <Button variant='link' p='$0' size='sm' onPress={handleBackPress}>
            {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
            <ButtonText color={'#B35340'}>
              Back
            </ButtonText>
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default OneProduct;
