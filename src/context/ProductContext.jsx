import React from 'react';
import { GameListApi } from '../api/api';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [gameList, setGameList] = React.useState(null);
  const [productsBag, setProdcutsBag] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  async function fetchGames() {
    try {
      const response = await fetch(GameListApi);
      const { results } = await response.json();
      console.log(results);

      const gamesFiltred = results.map((item) => {
        return {
          id: item.id,
          title: item.name,
          rating: item.rating,
          image: item.background_image,
          price: Math.floor(Math.random() * 256).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          plataforms: item.platforms,
          screenshots: item.short_screenshots,
        };
      });
      console.log('foi feito fetch');
      setGameList(gamesFiltred);
    } catch (error) {
      console.log(error);
    }
  }

  function addNewProduct(game) {
    setLoading(true);
    const newProductsBag = [...productsBag, game];
    setTimeout(() => {
      setLoading(false);
      setProdcutsBag(newProductsBag);
    }, 800);
  }

  function RemoveProduct() {}

  React.useEffect(() => {
    console.log(productsBag);
  }, [productsBag]);

  return (
    <ProductContext.Provider
      value={{
        gameList,
        fetchGames,
        addNewProduct,
        RemoveProduct,
        productsBag,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => React.useContext(ProductContext);
