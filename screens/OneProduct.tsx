import React from 'react'
import { View } from 'react-native';
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
    const { id, name, price, img } = route.params.product;
  
    return (
      <View>
        <Text>ID: {id}</Text>
        <Text>Name: {name}</Text>
        <Text>Price: ${price}</Text>
        {/* Otros detalles del producto... */}
      </View>
    );
  };
  
  export default OneProduct;
