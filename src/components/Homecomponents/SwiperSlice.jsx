import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const SwiperSlice = () => {
  return (
    <>
      <div className=" flex justify-center">
        <div className="w-1/2 py-8">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            <SwiperSlide className="flex  items-center">
              <div>
               <h1>ádjksahj</h1>
              </div>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                width="100%"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperSlice;
