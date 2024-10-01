import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetailsPage } from './pages/ProductDetailsPage';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<HomePage></HomePage>} />
            <Route path="/products" element={<ProductPage></ProductPage>} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage></ProductDetailsPage>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div></div>
      <h1>{serverData}</h1>
    </>
  );
}
