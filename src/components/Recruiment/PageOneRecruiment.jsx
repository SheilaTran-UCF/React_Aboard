import React from 'react';
import partner from '../../assets/partner.png';

const PageOneRecruiment = () => {
	return (
		<>
			<div className='grid grid-cols-12 gap-4 p-4 my-[45px] '>
				<div className='col-span-12 md:col-span-6 w-[60%] mx-[200px] my-[50px]'>
					<p className='font-bold text-[50px] my-[25px] '>
						Your Success is Our Success – We’re Here to See You Grow{' '}
					</p>
					<p className='text-md text-[#323847]'>
						ApplyBoard is more than a platform. It’s your trusted
						partner to help you do what you do best: help as many
						students as possible fulfill their international
						education dreams. .
					</p>
					<button className='bg-[#0064E1] px-[5px] py-[5px] rounded-[8px] hover:bg-sky-700 my-[50px] text-[#ffffff]'>
						Pertner with us
					</button>
				</div>
				<div className='col-span-12 md:col-span-6 w-[80%]'>
					<img src={partner} />
				</div>
			</div>
		</>
	);
};

export default PageOneRecruiment;
