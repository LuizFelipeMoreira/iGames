import React from 'react';
import { key } from '../api/api';
import { useParams } from 'react-router-dom';

import {
  ButtonAddToCart,
  ContainerProduct,
  Content,
  Description,
  InformationGame,
  SlideImage,
  WrapperSlide,
} from '../styles/pages/Product';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { MdOutlineShoppingCart } from 'react-icons/md';

import { useProduct } from '../context/ProductContext';

register();

const Product = () => {
  const [gameContent, setGameContent] = React.useState(null);
  const [gameScreenshots, setGameScreenshots] = React.useState([]);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { gameList } = useProduct();
  const { id } = useParams();
  const { addNewProduct, loading } = useProduct();

  React.useEffect(() => {
    const content = gameList.find((item) => item.id === Number(id));
    setGameContent(content);
    console.log(content);
    setGameScreenshots(content.screenshots);
  }, [id]);

  return (
    <ContainerProduct>
      <Content>
        <WrapperSlide>
          <Swiper
            navigation
            modules={[Navigation, Thumbs]}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {gameScreenshots.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideImage key={item.id} src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            slidesPerView={5}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            style={{ marginTop: '1rem' }}
          >
            {gameScreenshots.map((item) => (
              <SwiperSlide className="SwiperThumbs" key={item.id}>
                <SlideImage key={item.id} src={item.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </WrapperSlide>
        <InformationGame>
          <h1>{gameContent && gameContent.title}</h1>
          <p>{gameContent && gameContent.price}</p>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            aspernatur praesentium voluptatibus repellendus tempore? Sequi,
            eveniet suscipit nam est illum obcaecati quia deleniti. Perferendis
            facere deserunt aperiam reiciendis cumque voluptate.
          </Description>
          <ButtonAddToCart onClick={() => addNewProduct(gameContent)}>
            <MdOutlineShoppingCart />
            {loading ? 'Adicionando ao carrinho ...' : 'Adicionar ao carrinho'}
          </ButtonAddToCart>
        </InformationGame>
      </Content>

      <div className="relacionados"></div>
    </ContainerProduct>
  );
};

export default Product;
