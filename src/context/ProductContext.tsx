import React from 'react';
import { GameListApi } from '../api/api';

import { IGameType } from '../types/IGameType';
import { UseProductTYpe } from '../types/UseProductProps';
import { Response } from '../types/IGameResponse';

export const ProductContext = React.createContext({});

export const ProductProvider = ({ children }) => {
  const [gameList, setGameList] = React.useState<IGameType[]>([]);
  const [productsBag, setProdcutsBag] = React.useState<IGameType[]>([]);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchGames = React.useCallback(async () => {
    try {
      const response = await fetch(GameListApi);
      const { results }: Response = await response.json();

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

      setGameList(gamesFiltred);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const isProductAlreadyAdded = (game: IGameType) => {
    return productsBag.some((item) => item.id === game.id);
  };

  const addNewProduct = (game: IGameType) => {
    if (!isProductAlreadyAdded(game)) {
      setLoading(true);
      const newProductsBag = [...productsBag, game];

      setTimeout(() => {
        setLoading(false);
        setProdcutsBag(newProductsBag);
      }, 800);
    } else {
      setError('Este item ja  foi adicionado');
      setTimeout(() => setError(null), 800);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = productsBag.reduce((acc, product) => {
      const priceWithoutCurrencySymbol = product.price
        .replace(/[R$]/g, '')
        .replace(',', '.');

      const parsedPrice = parseFloat(priceWithoutCurrencySymbol);

      return acc + parsedPrice;
    }, 0);

    const formattedPrice = totalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedPrice;
  };

  const RemoveProduct = (id: number) => {
    const productRemoved = productsBag.filter((item) => item.id !== id);
    setProdcutsBag(productRemoved);
  };

  React.useEffect(() => {
    fetchGames();
    console.log(productsBag);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        gameList,
        fetchGames,
        addNewProduct,
        RemoveProduct,
        calculateTotalPrice,
        productsBag,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () =>
  React.useContext(ProductContext) as UseProductTYpe;
