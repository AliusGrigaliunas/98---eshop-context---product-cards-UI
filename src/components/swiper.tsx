import React from 'react';
import { styled } from '@mui/material';
import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img from 'components/img';

type SwiperProps = {
    images: string[],
};

const Swiper = styled(SwiperJS)({
    height: 250,
  });

const SwiperComponent: React.FC<SwiperProps> = ({ images }) => (
  <Swiper
    pagination={{
        dynamicBullets: true,
        }}
    navigation
    modules={[Pagination, Navigation]}
  >
    {images.map((imgSrc) => (
      <SwiperSlide key={imgSrc}>
        <Img src={imgSrc} sx={{ height: '100%', width: '100%' }} />
      </SwiperSlide>
        ))}
  </Swiper>
  );

export default SwiperComponent;
