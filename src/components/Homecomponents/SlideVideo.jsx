import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const VIDEO_PATH = 'https://www.youtube.com/watch?v=nPi6zI8_lok';
const VIDEO_PATHa = 'https://www.youtube.com/watch?v=8bhp89AIsnc';
const VIDEO_PATHb = 'https://www.youtube.com/watch?v=gnkrDse9QKc&t=5s';
const VIDEO_PATHc = 'https://www.youtube.com/watch?v=mXxsjzgD3CI';
const VIDEO_PATHd = 'https://www.youtube.com/watch?v=5v-wyR5emRw';

export default function SlideVideo() {
    const playerRef = useRef(null);
  return (
    <>
    <div>
        <h2 className="text-center font-bold py-2 mx-5">What Our Partners Have to Say</h2>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-10 "
      >
       
        <SwiperSlide>  <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} /></SwiperSlide>
        <SwiperSlide><ReactPlayer ref={playerRef} url={VIDEO_PATHa} controls={true} /></SwiperSlide>
        <SwiperSlide> <ReactPlayer ref={playerRef} url={VIDEO_PATHb} controls={true} /></SwiperSlide>
        <SwiperSlide> <ReactPlayer ref={playerRef} url={VIDEO_PATHc} controls={true} /></SwiperSlide>
        <SwiperSlide > <ReactPlayer ref={playerRef} url={VIDEO_PATHd} controls={true} /></SwiperSlide>
       
      </Swiper>
    </div>
    </>
  );
}
