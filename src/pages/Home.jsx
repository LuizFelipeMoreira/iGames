import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import {
  Container,
  Content,
  PlataformItem,
  Plataforms,
  TitleWrapper,
  Tittle,
} from '../styles/pages/Home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TotalGameListAPI } from '../API/api';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { register } from 'swiper/element/bundle';
import { Card } from '../components/Card/Style';
import GameCard from '../components/Card/Card';

register();

const Home = () => {
  const [gameList, setGameList] = React.useState(null);
  const plataforms = ['PC', 'Xbox', 'PlayStation', 'Nitendo', 'IOS', 'Android'];

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(TotalGameListAPI);
        const { results } = await response.json();
        setGameList(results);
        console.log(results);
        return true;
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []);

  return (
    <>
      <Header />
      <div style={{ width: '100%', borderBottom: '1px solid #452CFF' }}>
        <Plataforms>
          {plataforms.map((item) => (
            <PlataformItem key={item}>{item}</PlataformItem>
          ))}
        </Plataforms>
      </div>
      {gameList && (
        <Container>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
          >
            {gameList.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.background_image}
                  className="slide-item"
                  alt=""
                />
                <h2>{item.name}</h2>
              </SwiperSlide>
            ))}
          </Swiper>

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
