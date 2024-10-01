// import { useState } from 'react';
// import { Product } from '../lib/data.ts';
import { ProductCard } from './ProductCard';
export function Catalog() {
  // const [products, setProducts] = useState<Product[]>();
  // const [error, setError] = useState<unknown>();
  const products = [
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
    {
      productId: 0,
      name: 'dummy',
      imageUrl: 'dummb',
      price: 1234,
      size: 'dummy',
      material: 'dummy',
    },
  ];

  return (
    <div className="flex flex-wrap justify-evenly">
      {products?.map((prod) => (
        <ProductCard></ProductCard>
      ))}
    </div>
  );
}
