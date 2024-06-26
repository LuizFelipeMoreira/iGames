import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Product from './pages/Product';

import { ProductProvider } from './context/ProductContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <ProductProvider>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
