import React from 'react';
import Help from '../../assets/bg1.webp';
import Country from '../../assets/bg2.webp';
import Admission from '../../assets/bg3.webp';
import Container from '@mui/material/Container';

const SchoolPageThree = () => {
	return (
		<>
			<div className='imageSection py-[50px]'>
				<div className='py-[50px]'>
					<h1 className='text-[#ffffff] text-center font-bold text-[30px] '>
						Our Impact
					</h1>
					<p className='text-[#ffffff] text-center text-[11px]'>
						Helping connect top schools with students from around
						the <br /> world, and delivering results along the way.
					</p>
				</div>

				<Container maxWidth='md'>
					<div className='grid grid-cols-12 gap-4 p-4'>
						<div className='col-span-12 md:col-span-4 bg-[#ffffff] p-5'>
							<img width='100%' src={Help} />
							<div className='text-center pt-2'>
								<h2 className='text-[24px] font-bold'>800,000+</h2>
								<p>Students</p>
								<p>Helped</p>
							</div>
						</div>
                        <div className='col-span-12 md:col-span-4 bg-[#ffffff] p-5'>
							<img width='100%' src={Country} />
							<div className='text-center pt-2'>
								<h2 className='text-[24px] font-bold'>150+</h2>
								<p>Students Source</p>
								<p>Country</p>
							</div>
						</div>
                        <div className='col-span-12 md:col-span-4 bg-[#ffffff] p-5'>
							<img width='100%' src={Admission} />
							<div className='text-center pt-2'>
								<h2 className='text-[24px] font-bold'>800,000+</h2>
								<p>Offer of</p>
								<p>Admision Rate</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default SchoolPageThree;
