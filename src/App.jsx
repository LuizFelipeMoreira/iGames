import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Product from './pages/Product';

import { ProductProvider } from './context/ProductContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutPage, setIsCheckoutPage] = React.useState(false);

  return (
    <BrowserRouter>
      <ProductProvider>
        {!isCheckoutPage && <Header setIsOpen={setIsOpen} isOpen={isOpen} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="checkout"
            element={<Checkout setIsCheckoutPage={setIsCheckoutPage} />}
          />
        </Routes>
        {!isCheckoutPage && <Footer />}
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
