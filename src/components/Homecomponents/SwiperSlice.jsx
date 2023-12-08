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
				<p className='font-bold text-[20px]'>A Platform That Supports You End-to-End</p>
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
						<SwiperSlide>
							<div className='grid grid-cols-12 gap-8 items-center'>
								<div className='col-span-4'>
									<h1 className='text-[#323847] text-[20px] font-bold text-start'>
										Students
									</h1>

									<p className='text-[14px] text-justify py-5 '>
										We believe in your dreams and work hard
										to make them a reality. Get matched with
										and apply to programs and schools that
										align with your background, skills, and
										interests.
									</p>
									<div className='flex justify-start'>
										<Button
											className='bg-[#0064E1] py-[12px] px-[16px]
									 text-white'
											variant='text'
										>
											Learn more
										</Button>
									</div>
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
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKyp5MhMvhrFUb-3CK0qEG0vXWmuJa2PWoZmfRpwKrTXESX4H00lFB0FkRlHYT3_7imM&usqp=CAU'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPshfELML2_itIBOB63HEThg6ucMds6G9XG3-s5JOc9_cyFRSo8oki6fj6xKrjGqn_UDs&usqp=CAU'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qNuSA4FIaYnuKTQZal9TtKo_7ntY8PumFcyPAjSWVQWoBvoPwaZA4sNCWQ&s'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKuJg2G-zYMfuKwgNAv-4xnoAkKcvcDHUVZ28Xy3rxvTGdKaJdfCp2CSJmmym_651l9w&usqp=CAU'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJXibL69zo5AnGrJ-rtN5UePYHiYUuC6l9og1YSP9-Z9kDgnsUlqPlPWMfY7FUP14r8o&usqp=CAU'
								width='100%'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLt4gKJrKEi4t4DbIfFfVfB7koLXjwIVkxg&usqp=CAU'
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
