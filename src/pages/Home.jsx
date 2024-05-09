import React from 'react';

import { Slide } from '../components/Slide';
import { GameCard } from '../components/Card';

import { Container, Content, TitleWrapper, Tittle } from '../styles/pages/Home';

import { useProduct } from '../context/ProductContext';

const Home = () => {
  const { gameList, fetchGames, addNewProduct } = useProduct();

  React.useEffect(() => {
    if (gameList === null) fetchGames();
  }, []);

  function sendGame({ currentTarget }) {
    const id = Number(currentTarget.parentElement.id);
    const clickedGame = gameList.find((item) => item.id === id);
    console.log(clickedGame);
    addNewProduct(clickedGame);
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
              <GameCard key={game.id} {...game} onClick={sendGame} />
            ))}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Home;
