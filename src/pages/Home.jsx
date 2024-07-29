import React from 'react';

import { Slide } from '../components/Slide';
import { GameCard } from '../components/Card';

import { Container, Content, TitleWrapper, Tittle } from '../styles/pages/Home';

import { useProduct } from '../context/ProductContext';

const Home = () => {
  const { gameList, fetchGames, addNewProduct, productsBag } = useProduct();

  // React.useEffect(() => {
  //   if (gameList === null) fetchGames();
  // }, []);

  function sendGame({ currentTarget }) {
    const id = Number(currentTarget.parentElement.id);
    const clickedGame = gameList.find((item) => item.id === id);

    addNewProduct(clickedGame);
  }

  function includesInBag(game) {
    return productsBag.some((item) => item.id === game.id);
  }

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

export default Home;
