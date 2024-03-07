// CatalogComponent.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import ProductComponent from './ProductTS';
import {
  Box,
  VStack,
  Heading,
  Input,InputSlot, SearchIcon, InputIcon,
  InputField,
  Button,
  ButtonText,
  Image,
  Center,
  Text, 
  
} from '@gluestack-ui/themed';

const CatalogComponent: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Realizar la solicitud a la API
    axios.get('http://localhost/InnovaDesk---Backend/public/api/products')
      .then(response => {
        // Almacenar los productos en el estado local
        setProducts(response.data[0]); // Accede al primer elemento del arreglo
        console.log('Respuesta de la API:', response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // La dependencia vacía significa que este efecto se ejecutará solo una vez al montar el componente

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <ScrollView style={{ backgroundColor: 'black'}}>
      <View>
      <Input  
    borderRadius={'$full'}>
          <InputSlot bgColor='white' >
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField
            placeholder="Search..." bgColor='white'
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
        </Input>
        {filteredProducts.map(product => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
    </>
  );
};



export default CatalogComponent;
