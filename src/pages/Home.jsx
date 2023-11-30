import React from 'react';
import VideoBanner from '../components/Homecomponents/VideoBanner';
import SecondCompoent from '../components/Homecomponents/SecondCompoent';
import Footer from '../components/Homecomponents/Footer';
import ThirdComponent from '../components/Homecomponents/ThirdComponent';
import NextComponent from '../components/Homecomponents/NextComponent';

const Home = () => {
	return (
		<>
			<VideoBanner />
			<NextComponent />
			<SecondCompoent />
			<ThirdComponent />
			<Footer />
		</>
	);
};

export default Home;
