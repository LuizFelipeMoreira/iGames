import React from 'react';

import { Slide } from '../components/Slide';
import { GameCard } from '../components/Card';

import {
  Container,
  Content,
  PlataformItem,
  Plataforms,
  TitleWrapper,
  Tittle,
} from '../styles/pages/Home';

import { GameListApi, key } from '../api/api';
import { useProduct } from '../context/ProductContext';

const Home = () => {
  const [gameList, setGameList] = React.useState(null);
  const plataforms = ['PC', 'Xbox', 'PlayStation', 'Nitendo', 'IOS', 'Android'];
  const { AddNewProduct } = useProduct();

  React.useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(GameListApi);
        const { results } = await response.json();

        const GamesFiltred = results.map((item) => {
          return {
            id: item.id,
            title: item.name,
            rating: item.rating,
            image: item.background_image,
            price: Math.floor(Math.random() * 256).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }),
          };
        });
        console.log(GamesFiltred);

        setGameList(GamesFiltred);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    };

    request();
  }, []);

  function sendGame({ currentTarget }) {
    const id = +currentTarget.parentElement.id;
    const clickedGame = gameList.find((item) => item.id === id);
    AddNewProduct(clickedGame);
  }

  return (
    <>
      <div style={{ maxWidth: '100%', borderBottom: '1px solid #452CFF' }}>
        <Plataforms>
          {plataforms.map((item) => (
            <PlataformItem key={item}>{item}</PlataformItem>
          ))}
        </Plataforms>
      </div>

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
