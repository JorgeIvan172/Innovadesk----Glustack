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
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnotherComponent;
