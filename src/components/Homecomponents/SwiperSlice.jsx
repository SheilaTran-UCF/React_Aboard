import React, { useRef, useState } from "react";
// Import Swiper React components
import { Button } from "@mui/material";
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
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-4">
                  <h1 className="text-[#323847] text-[20px] font-bold text-start">
                    Students
                  </h1>

                  <p className="text-[14px] text-justify py-5 ">
                    We believe in your dreams and work hard to make them a
                    reality. Get matched with and apply to programs and schools
                    that align with your background, skills, and interests.
                  </p>
                  <div className="flex justify-start">
                    <Button
                      variant="text"
                      className="bg-[#0064E1] py-[12px] px-[16px] text-white">
                      Learn more
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <img
                    src="https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg"
                    width="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperSlice;
