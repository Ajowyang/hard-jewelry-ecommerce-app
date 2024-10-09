import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartContext, CartValue } from './components/CartContext';
import { Prod, CartProd } from './lib/data.ts';

export default function App() {
  const [serverData, setServerData] = useState('');
  const [cart, setCart] = useState<CartProd[]>([]);

  function addToCart(product: CartProd): void {
    setCart([...cart, product]);
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
