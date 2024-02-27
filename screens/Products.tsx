import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Center, Text } from '@gluestack-ui/themed';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        // Almacenar los productos en el estado local
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // La dependencia vacía significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <Center>
      {products.map((product) => (
        <Box key={product.id} p='$5' maxWidth='auto' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
          <Text>Name: {product.name}</Text>
          <Text>Price: {product.price}</Text>
          {/* Otros detalles del producto... */}
        </Box>
      ))}
    </Center>
  );
}

export default Products;
