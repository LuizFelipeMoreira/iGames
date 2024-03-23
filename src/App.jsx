import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Header from './components/Header/Header';

import ProudctsContext from './Context/ProudctsContext';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <ProudctsContext>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </ProudctsContext>
    </BrowserRouter>
  );
};

export default App;
