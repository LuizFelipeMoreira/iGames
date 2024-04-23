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
import { useProduct } from '../context/ProductContext';

register();

const Product = () => {
  const [gameContent, setGameContent] = React.useState(null);
  const { gameList } = useProduct();
  const { id } = useParams();

  React.useEffect(() => {
    const content = gameList.find((item) => item.id === Number(id));
    setGameContent(content);
  }, [id]);

  return (
    <ContainerProduct>
      <Content>
        <div className="slide-wrapper"></div>
        <InformationGame>
          <h1>{gameContent && gameContent.title}</h1>
          <p>{gameContent && gameContent.price}</p>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            aspernatur praesentium voluptatibus repellendus tempore? Sequi,
            eveniet suscipit nam est illum obcaecati quia deleniti. Perferendis
            facere deserunt aperiam reiciendis cumque voluptate.
          </Description>
        </InformationGame>
      </Content>

      <div className="relacionados"></div>
    </ContainerProduct>
  );
};

export default Product;
