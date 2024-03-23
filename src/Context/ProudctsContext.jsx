import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ProductContext = createContext();

const ProudctsContext = ({ children }) => {
  const [products, setProdcuts] = useState([]);

  function AddNewProduct() {}

  function RemoveProduct() {}

  return (
    <ProductContext.Provider value={{ AddNewProduct, RemoveProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProudctsContext;
