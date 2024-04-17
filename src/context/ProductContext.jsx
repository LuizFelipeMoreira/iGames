import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsBag, setProdcutsBag] = useState([]);

  function AddNewProduct(game) {
    setProdcutsBag((previusProducts) => [...previusProducts, game]);
    //faca um map para adicionar um novo item no state prodctsBag
  }

  function RemoveProduct() {}

  React.useEffect(() => {
    console.log(productsBag);
  }, [productsBag]);

  return (
    <ProductContext.Provider
      value={{ AddNewProduct, RemoveProduct, productsBag }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => React.useContext(ProductContext);
