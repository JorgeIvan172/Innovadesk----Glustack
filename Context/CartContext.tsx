// CartContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  // Otros detalles del producto...
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex((item) => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
