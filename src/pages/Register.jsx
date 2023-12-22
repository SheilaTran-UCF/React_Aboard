import React from 'react';
import Header from '../components/public/Header';
import ThirdComponent from '../components/Homecomponents/ThirdComponent';
import Footer from '../components/public/Footer';

const Register = () => {
	return (
		<>
			{/* <Header /> */}
			<h5 className='text-[30px] py-5 text-center justify-center font-bold'>
				ApplyBoard Registration
			</h5>
			<p className='text-center text-[15px]'>
				Ready to get started with ApplyBoard?
			</p>

			<p className='text-center text-[15px]'>
				Register today to find out how we can support you.
			</p>

			<ThirdComponent />
			<div className='relative py-5 text-center justify-center left-40 w-50 '>
				<div className='absolute bg-white-medium p-2 left-40  flex  text-blue-500 py-7'>
					<h5>Already a Registerd User?</h5>
				</div>
				<button className=' w-40 bg-gradient-to-r from-blue-400 to-cyan-200  font-semibold  py-7 text-[15px]'>
					Log In
				</button>
			</div>
			<Footer />
		</>
	);
};

export default Register;
