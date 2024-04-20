import React from 'react';
import { key } from '../api/api';
import { useParams } from 'react-router-dom';

import {
  ContainerProduct,
  Content,
  Description,
  InformationGame,
  SlideImage,
} from '../styles/pages/Product';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

register();

const Product = () => {
  const [gameContent, setGameContent] = React.useState([]);
  const [gameScreenshots, setGameScreenshots] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentResult, screenshotsResult] = await Promise.all([
          fetch(
            `https://api.rawg.io/api/games/${id}?key=a4789622abbc4b87a151d4ba9c522e05`
          ),
          fetch(
            `https://api.rawg.io/api/games/${id}/screenshots?key=a4789622abbc4b87a151d4ba9c522e05`
          ),
        ]);

        const content = await contentResult.json();
        const screenshots = await screenshotsResult.json();

        setGameContent(content);
        setGameScreenshots(screenshots.results);
      } catch (error) {
        console.error('Falha ao buscar dados:', error);
      }
    };
    console.log(gameScreenshots);
    fetchData();
  }, []);

  return (
    <ContainerProduct>
      <Content>
        <div className="slide-wrapper"></div>
        <InformationGame>
          <h1>{gameContent.name}</h1>
          <Description></Description>
        </InformationGame>
      </Content>

      <div className="relacionados"></div>
    </ContainerProduct>
  );
};

export default Product;
