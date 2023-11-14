"use client";
import React, { createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  updateCart: (cart: Product[]) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const queryClient = new QueryClient();

  const addToCart = (product: Product) =>
    setCart((prevCart) => [...prevCart, product]);
  const updateCart = (updatedCart: Product[]) => setCart(updatedCart);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider
        value={{ cart, isCartOpen, addToCart, updateCart, openCart, closeCart }}
      >
        {children}
      </CartContext.Provider>
    </QueryClientProvider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
