import { createContext } from 'react';
import { CartProd } from '../lib/data.ts';

const defaultWishlistValue: WishlistValue = {
  wishlist: [],
  addToWishlist: () => undefined,
  removeFromWishlist: () => undefined,
  incrementQty: () => undefined,
  decrementQty: () => undefined,
  clearWishlist: () => undefined,
  addWishlistToCart: () => undefined,
};

export type WishlistValue = {
  wishlist: CartProd[];
  addToWishlist: (product: CartProd) => void;
  removeFromWishlist: (product: CartProd) => void;
  incrementQty: (product: CartProd) => void;
  decrementQty: (product: CartProd) => void;
  clearWishlist: () => void;
  addWishlistToCart: () => void;
};

export const WishlistContext =
  createContext<WishlistValue>(defaultWishlistValue);
