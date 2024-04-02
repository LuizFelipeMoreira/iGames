import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext();

const ProudctsContext = ({ children }) => {
  const [productsBag, setProdcutsBag] = useState([]);

  function AddNewProduct(game) {
    setProdcutsBag((prevArray) => [...prevArray, game]);
    console.log(productsBag);
  }

  function RemoveProduct() {}

  return (
    <ProductContext.Provider
      value={{ AddNewProduct, RemoveProduct, productsBag }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProudctsContext;
