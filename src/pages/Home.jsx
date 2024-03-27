import React from 'react';

import Slide from '../components/Slide/Slide';
import GameCard from '../components/Card/Card';

import {
  Container,
  Content,
  PlataformItem,
  Plataforms,
  TitleWrapper,
  Tittle,
} from '../styles/pages/Home';

import { TotalGameListAPI } from '../API/api';
import { ProductContext } from '../Context/ProudctsContext';

const Home = () => {
  const [gameList, setGameList] = React.useState(null);
  const plataforms = ['PC', 'Xbox', 'PlayStation', 'Nitendo', 'IOS', 'Android'];

  React.useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(TotalGameListAPI);
        const { results } = await response.json();

        setGameList(results);
        return true;
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

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
              <GameCard key={game.id} {...game} />
            ))}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Home;
