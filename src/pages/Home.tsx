import React from 'react';

import { Slide } from '../components/Slide';
import { GameCard } from '../components/Card';

import { Container, Content, TitleWrapper, Tittle } from '../styles/pages/Home';

import { useProduct } from '../context/ProductContext';
import { IGameType } from '../types/IGameType';

export const Home = () => {
  const { gameList, addNewProduct, productsBag } = useProduct();

  const sendGame = ({ currentTarget }) => {
    const id = Number(currentTarget.parentElement.id);
    const clickedGame = gameList.find((item) => item.id === id);

    if (clickedGame) addNewProduct(clickedGame);
  };

  const includesInBag = (game: IGameType) => {
    return productsBag.some((item) => item.id === game.id);
  };

  return (
    <>
      {gameList && (
        <Container>
          <Slide gameList={gameList} />

          <TitleWrapper>
            <Tittle>Conheça nossas coleçoes</Tittle>
            <div>
              <p>{gameList.length}</p>
              <p style={{ color: '#575757' }}>products</p>
            </div>
          </TitleWrapper>

          <Content>
            {gameList.map((game) => (
              <GameCard
                key={game.id}
                {...game}
                onClick={sendGame}
                isActive={includesInBag(game)}
              />
            ))}
          </Content>
        </Container>
      )}
    </>
  );
};
