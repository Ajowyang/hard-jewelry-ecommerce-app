import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartContext, CartValue } from './components/CartContext';
import { CartProd } from './lib/data.ts';

export default function App() {
  const [serverData, setServerData] = useState('');
  const [cart, setCart] = useState<CartProd[]>([]);

  function addToCart(product: CartProd): void {
    setCart([...cart, product]);
  }
  function removeFromCart(product: CartProd): void {
    const newCart = cart.filter(
      (prod) =>
        prod.itemId != product.itemId ||
        prod.material != product.material ||
        prod.size != product.size
    );
    setCart(newCart);
  }
  function incrementQty(product: CartProd): void {
    const newCart = cart.map((prod) => {
      if (
        prod.itemId === product.itemId &&
        prod.material === product.material &&
        prod.size === product.size
      ) {
        console.log('adding 1!!!!!');
        const incrementedProd = {
          imageUrl: prod.imageUrl,
          itemId: prod.itemId,
          itemName: prod.itemName,
          size: prod.size,
          material: prod.material,
          qty: prod.qty + 1,
          unitPrice: prod.unitPrice,
        };
        return incrementedProd;
      }
      return prod;
    });
    setCart(newCart);
  }
  function decrementQty(product: CartProd): void {
    const newCart = cart.map((prod) => {
      if (
        prod.itemId === product.itemId &&
        prod.material === product.material &&
        prod.size === product.size
      ) {
        const decrementedProd = {
          imageUrl: prod.imageUrl,
          itemId: prod.itemId,
          itemName: prod.itemName,
          size: prod.size,
          material: prod.material,
          qty: prod.qty - 1,
          unitPrice: prod.unitPrice,
        };
        return decrementedProd;
      }
      return prod;
    });
    setCart(newCart);
  }

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);
  const cartValue: CartValue = {
    cart,
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
  };
  return (
    <>
      <CartContext.Provider value={cartValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar></NavBar>}>
              <Route index element={<HomePage></HomePage>} />
              <Route path="/products" element={<ProductPage></ProductPage>} />
              <Route
                path="/products/details/:itemId"
                element={<ProductDetailsPage></ProductDetailsPage>}
              />
              <Route path="/cart" element={<CartPage></CartPage>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <div></div>
        <h1>{serverData}</h1>
      </CartContext.Provider>
    </>
  );
}
