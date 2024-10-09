import { createContext } from 'react';
import { Prod, CartProd } from '../lib/data.ts';

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export type CartValue = {
  cart: CartProd[];
  addToCart: (product: CartProd) => void;
};

export const CartContext = createContext<CartValue>(defaultCartValue);
