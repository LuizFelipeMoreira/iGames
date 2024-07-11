import React from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  ButtonAddToCart,
  ContainerProduct,
  Content,
  Description,
  InformationGame,
  RelatedGameCard,
  GameTitle,
  SlideImage,
  WrapperSlide,
  ButtonGameCard,
  CardInformation,
} from '../styles/pages/Product';

import { Title } from '../styles/pages/Product';

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
  const { gameList, addNewProduct, loading, fetchGames, error } = useProduct();
  const [relatedGamesList, setRelatedGamesList] = React.useState([]);
  const ref = React.useRef(null);
  const { id } = useParams();

  //if (gameList === null) fetchGames();

  React.useEffect(() => {
    const content = gameList.find((item) => item.id === Number(id));

    setGameContent(content);
    ref.current.scrollIntoView();

    if (content) {
      setGameScreenshots(content.screenshots);
    }

    getRelatedGames();
  }, [id, gameList]);

  function getRelatedGames() {
    const quantityItem = 3;
    const randomIndexes = [];

    while (randomIndexes.length < quantityItem) {
      let randomIndex = Math.floor(Math.random() * gameList.length);
      if (!randomIndexes.includes(randomIndex)) randomIndexes.push(randomIndex);
    }

    const relatedGames = randomIndexes.map((index) => gameList[index]);

    setRelatedGamesList(relatedGames);
  }

  return (
    <ContainerProduct ref={ref}>
      <Title>{gameContent && gameContent.title}</Title>
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
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            aspernatur praesentium voluptatibus repellendus tempore? Sequi,
            eveniet suscipit nam est illum obcaecati quia deleniti. Perferendis
            facere deserunt aperiam reiciendis cumque voluptate.
          </Description>
          <h1>{gameContent && gameContent.price}</h1>
          <ButtonAddToCart
            onClick={() => addNewProduct(gameContent)}
            disabled={loading}
          >
            <MdOutlineShoppingCart />
            {loading ? 'Adicionando ao carrinho ...' : 'Adicionar ao carrinho'}
          </ButtonAddToCart>
          {error && <p style={{ color: '#452CFF' }}>{error}</p>}
          <hr />
          <h4>Plataformas</h4>
          <p>Xbox, Playstastion, nitendo, pc</p>
          <h4>Generos</h4>
          <p>Tiro, Acao, Aventura.</p>
          <h4>Desenvolvedores</h4>
          <p>Charles, Jhons Witc, Ferber Lyon</p>
        </InformationGame>
      </Content>

      <Title>Sobre</Title>

      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        voluptates ratione eaque assumenda eveniet sint rem, quibusdam ab
        inventore maxime quia numquam, nihil aperiam quisquam minima? Tenetur
        aliquam voluptatibus sit! Consequuntur ullam numquam cum eveniet,
        tempora aliquid cupiditate error odio? Provident incidunt saepe
        laudantium dolores vitae commodi itaque eaque doloribus sapiente hic
        voluptatum cum quo, corporis maiores. Numquam, incidunt magni. Nam,
        ipsam quisquam consequuntur cum ab, sit tempora excepturi quia a quo
        fugit aliquam! Nihil corrupti, ipsa tenetur, consectetur voluptate quae
        delectus quia voluptatum a accusamus cupiditate et, obcaecati placeat.
        Facere quod ex enim dolor dolorum neque veritatis, totam beatae fugit
        odio aut quae id, officia impedit! Temporibus exercitationem, sint quod
        id odit repellendus possimus ad optio magnam sunt ipsa? Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Odio asperiores blanditiis
        nisi. Facilis, assumenda adipisci neque molestias, eum sint maiores
        laudantium vitae culpa temporibus ullam totam quaerat sed esse ab?
        Suscipit ab rerum nemo aliquam maiores. Vitae repellat quidem voluptatem
        numquam ut debitis enim cumque commodi quisquam nulla libero, quo minus
        exercitationem maxime ipsam adipisci veritatis autem, placeat veniam
        velit.
      </Description>

      <Title>Conheça tambem: </Title>

      <div
        className="relacionados"
        style={{
          maxWidth: '1170px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          margin: '0  auto',
        }}
      >
        {relatedGamesList &&
          relatedGamesList.map((item) => (
            <RelatedGameCard key={item.id}>
              <img src={item.image} alt="" />
              <CardInformation>
                <GameTitle>{item.title}</GameTitle>
                <ButtonGameCard>
                  <Link to={`/product/${item.id}`}>Ver mais</Link>
                </ButtonGameCard>
              </CardInformation>
            </RelatedGameCard>
          ))}
      </div>
    </ContainerProduct>
  );
};

export default Product;
