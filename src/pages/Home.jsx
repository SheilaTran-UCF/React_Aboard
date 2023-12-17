import React from 'react';
import VideoBanner from '../components/Homecomponents/VideoBanner';
import SecondCompoent from '../components/Homecomponents/SecondCompoent';
import Footer from '../components/public/Footer';
import ThirdComponent from '../components/Homecomponents/ThirdComponent';
import SwiperSlice from '../components/Homecomponents/SwiperSlice';
import FourComponent from '../components/Homecomponents/FourComponent';
import SlideVideo from '../components/Homecomponents/SlideVideo';

const Home = () => {
	return (
		<>
			<VideoBanner />
			<SwiperSlice />
			<ThirdComponent />
			<FourComponent />
			<SlideVideo/>
			<Footer />
		</>
	);
};

export default Home;
