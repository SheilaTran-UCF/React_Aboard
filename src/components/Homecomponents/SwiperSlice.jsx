import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SwiperSlice = () => {
	return (
		<>
			<div className=' flex justify-center'>
				<div className='w-1/2 py-8'>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className='mySwiper'
					>
						<SwiperSlide className='flex  items-center'>
							<div className='grid grid-cols-12 gap-4'>
								<div className='col-span-4'>
									<h1 className='font-normal md:font-bold'>
										Students
									</h1>

									<h5 className='text-[10px] py-5 '>
										We believe in your dreams and work hard
										to make them a reality. Get matched with
										and apply to programs and schools that
										align with your background, skills, and
										interests.
									</h5>
									<Button variant='text'>Learn more</Button>
								</div>
								<div className='col-span-8'>
									<img
										src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
										width='100%'
									/>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg'
								width='100%'
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default SwiperSlice;
