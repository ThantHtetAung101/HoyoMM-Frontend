"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import Image from 'next/image';

export default function Banner({ banners }: { banners: object[] }) {

  return (
    <div className='mt-5'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl mt-5"
      >
        {
          banners && banners.map((banner: any, index: number) => (
            <SwiperSlide key={index}>
              <img src={banner.image} alt={`Banner ${banner.title}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}