import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SlideItem } from './Style';

register();

const Slide = ({ gameList }) => {
  return (
    <div>
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
            <SlideItem src={item.image} alt="" />
            <h2>{item.name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
