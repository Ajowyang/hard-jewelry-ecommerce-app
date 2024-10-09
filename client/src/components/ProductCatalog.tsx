import { Prod } from '../lib/data.ts';

import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export function Catalog() {
  const [products, setProducts] = useState<Prod[]>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status:${response.status}`);
        }
        const data = (await response.json()) as Prod[];
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {products?.map((prod, index) => (
        <ProductCard
          title={prod.name}
          price={prod.lowestPrice}
          imageUrl={prod.imageUrl}
          itemId={prod.itemId}
          key={index}></ProductCard>
      ))}
    </div>
  );
}
