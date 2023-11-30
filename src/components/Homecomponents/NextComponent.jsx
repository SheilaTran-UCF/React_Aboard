import React from 'react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

function NextComponent() {
	return (
		<div className='elementor-widget-container'>
			<h2 className='elementor-heading-title elementor-size-default'>
				A Platform That Supports You End-to-End
			</h2>

			<div class='elementor-widget-container'>
				<div class='elementor-button-wrapper'>
					<a
						href='#/'
						class='elementor-button-link elementor-button elementor-size-sm toggle-btn-active'
						role='button'
					>
						<span class='elementor-button-content-wrapper'>
							<span class='elementor-button-text'>Students</span>
						</span>
					</a>
				</div>
			</div>

			<div class='elementor-button-wrapper'>
				<a
					href='#/'
					class='elementor-button-link elementor-button elementor-size-sm'
					role='button'
				>
					<span class='elementor-button-content-wrapper'>
						<span class='elementor-button-text'>
							Recruitment Partners
						</span>
					</span>
				</a>
			</div>

			<div class='elementor-button-wrapper'>
				<a
					href='#/'
					class='elementor-button-link elementor-button elementor-size-sm toggle-btn-active'
					role='button'
				>
					<span class='elementor-button-content-wrapper'>
						<span class='elementor-button-text'>
							Partner Schools
						</span>
					</span>
				</a>
			</div>

			<div class='elementor-widget-container'>
				<div class='elementor-swiper'>
					<div
						class='elementor-slides-wrapper elementor-main-swiper swiper-container swiper-container0 swiper-container-initialized swiper-container-horizontal'
						dir='ltr'
						data-animation='fadeInLeft'
						style='cursor: grab;'
					>
						<div
							class='swiper-wrapper elementor-slides'
							style='transition-duration: 0ms; transform: translate3d(-2180px, 0px, 0px);'
						>
							<div
								class='elementor-repeater-item-a41ebf4 swiper-slide'
								style='width: 1090px;'
								data-swiper-slide-index='0'
							>
								<div class='swiper-slide-bg'></div>
								<div class='swiper-slide-inner'>
									<div
										class='swiper-slide-contents animated fadeInLeft'
										style=''
									>
										<div class='elementor-slide-heading'>
											Students
										</div>
										<div class='elementor-slide-description'>
											We believe in your dreams and work
											hard to make them a reality. Get
											matched with and apply to programs
											and schools that align with your
											background, skills, and interests.
										</div>
										<a
											href='https://www.applyboard.com/services/students'
											class='elementor-button elementor-slide-button elementor-size-sm'
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div
								class='elementor-repeater-item-3883dc3 swiper-slide swiper-slide-prev'
								style='width: 1090px;'
								data-swiper-slide-index='1'
							>
								<div class='swiper-slide-bg'></div>
								<div class='swiper-slide-inner'>
									<div
										class='swiper-slide-contents animated fadeInLeft'
										style=''
									>
										<div class='elementor-slide-heading'>
											Recruitment Partners
										</div>
										<div class='elementor-slide-description'>
											ApplyBoard is more than a
											platform—we are your trusted
											partner—here to help you do what you
											do best: help as many students as
											possible fulfill their international
											education dreams.
										</div>
										<a
											href='https://www.applyboard.com/services/recruiters'
											class='elementor-button elementor-slide-button elementor-size-sm'
										>
											Learn More
										</a>
									</div>
								</div>
							</div>
							<div
								class='elementor-repeater-item-ee5e108 swiper-slide swiper-slide-active'
								style='width: 1090px;'
								data-swiper-slide-index='2'
							>
								<div class='swiper-slide-bg elementor-ken-burns--active'></div>
								<div class='swiper-slide-inner'>
									<div
										class='swiper-slide-contents animated fadeInLeft'
										style=''
									>
										<div class='elementor-slide-heading'>
											Partner Schools
										</div>
										<div class='elementor-slide-description'>
											Increase your global presence and
											the number of qualified students
											from a single, easy-to-use platform
											trusted by more than 1,750
											institutions worldwide.
										</div>
										<a
											href='https://www.applyboard.com/services/schools'
											class='elementor-button elementor-slide-button elementor-size-sm'
										>
											Learn More
										</a>
									</div>
								</div>
							</div>{' '}
						</div>
						<div class='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'>
							<span
								class='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 1'
							></span>
							<span
								class='swiper-pagination-bullet'
								tabindex='0'
								role='button'
								aria-label='Go to slide 2'
							></span>
							<span
								class='swiper-pagination-bullet swiper-pagination-bullet-active'
								tabindex='0'
								role='button'
								aria-label='Go to slide 3'
							></span>
						</div>
						<span
							class='swiper-notification'
							aria-live='assertive'
							aria-atomic='true'
						></span>
						<span
							class='swiper-notification'
							aria-live='assertive'
							aria-atomic='true'
						></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NextComponent;
