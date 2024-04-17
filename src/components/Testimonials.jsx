import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper !w-full"
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <div className='my-6'>
          <SwiperSlide className='flex flex-col shadow-l-shad border-1 border-gray-200 rounded-xl p-6'>
            <div className='text-center text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal'>Оч крутой сервис, майню тут уже с самого выхода наверное. Как биток взлетит будем на вершине))</div>
            <div className='text-center font-exo text-dark-lead mt-5'>@crypton</div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col shadow-l-shad border-1 border-gray-200 rounded-xl p-6'>
            <div className='text-center text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal'>Оч крутой сервис, майню тут уже с самого выхода наверное. Как биток взлетит будем на вершине))</div>
            <div className='text-center font-exo text-dark-lead mt-5'>@Alexander96</div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col shadow-l-shad border-1 border-gray-200 rounded-xl p-6'>
            <div className='text-center text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal'>Оч крутой сервис, майню тут уже с самого выхода наверное. Как биток взлетит будем на вершине))</div>
            <div className='text-center font-exo text-dark-lead mt-5'>@UnicarnCoin</div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col shadow-l-shad border-1 border-gray-200 rounded-xl p-6'>
            <div className='text-center text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal'>Оч крутой сервис, майню тут уже с самого выхода наверное. Как биток взлетит будем на вершине))</div>
            <div className='text-center font-exo text-dark-lead mt-5'>@vasyutin</div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col shadow-l-shad border-1 border-gray-200 rounded-xl p-6'>
            <div className='text-center text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal'>Оч крутой сервис, майню тут уже с самого выхода наверное. Как биток взлетит будем на вершине))</div>
            <div className='text-center font-exo text-dark-lead mt-5'>@taisya</div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}  

export default Testimonials;