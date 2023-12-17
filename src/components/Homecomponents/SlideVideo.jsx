import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const linkVideo = [
  {
    url: "https://www.youtube.com/embed/nPi6zI8_lok?si=qGTi67EnK_WSyVSS",
  },
  {
    url: "https://www.youtube.com/embed/gnkrDse9QKc?si=8XLJSJ4VF0MH7ecO",
  },
  {
    url: "https://www.youtube.com/embed/mXxsjzgD3CI?si=WcIYWvbZk173SASc",
  },
  {
    url: "https://www.youtube.com/embed/nPi6zI8_lok?si=qGTi67EnK_WSyVSS",
  },
  {
    url: "https://www.youtube.com/embed/gnkrDse9QKc?si=8XLJSJ4VF0MH7ecO",
  },
  {
    url: "https://www.youtube.com/embed/mXxsjzgD3CI?si=WcIYWvbZk173SASc",
  }
];

export default function SlideVideo() {
  const playerRef = useRef(null);
  return (
    <>
      <div>
        <h2 className="text-center text-[30px] font-bold py-5 ">
          What Our Partners Have to Say
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper">
          {linkVideo.map((value) => {
            return (
              <>
                <SwiperSlide >
                  <iframe
                    width="100%"
                    height="315"
                    src={value.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>

       
      </div>
    </>
  );
}
