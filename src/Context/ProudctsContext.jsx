import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext();

const ProudctsContext = ({ children }) => {
  const [products, setProdcuts] = useState([]);

  function AddNewProduct({ target }) {
    console.log(target.parentElement);
  }

  function RemoveProduct() {}

  return (
    <ProductContext.Provider value={{ AddNewProduct, RemoveProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProudctsContext;
