import { createContext } from 'react';
import { CartProd } from '../lib/data.ts';

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  incrementQty: () => undefined,
  decrementQty: () => undefined,
};

export type CartValue = {
  cart: CartProd[];
  addToCart: (product: CartProd) => void;
  removeFromCart: (product: CartProd) => void;
  incrementQty: (product: CartProd) => void;
  decrementQty: (product: CartProd) => void;
};

export const CartContext = createContext<CartValue>(defaultCartValue);
