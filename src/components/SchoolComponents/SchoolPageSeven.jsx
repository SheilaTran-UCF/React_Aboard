import React from 'react';
import { Container } from '@mui/material';
import TabsComponent from './TabsComponent';
import Icon from '../../assets/icon1.svg';

const SchoolPageSeven = () => {
	const data = [
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Conestoga.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/George_Brown.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/BC_Institute_of_Technology.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/UWaterloo.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/University_of_Northern_BC.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Memorial_University_of_Newfoundland.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/University_of_Manitoba.webp',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Southern_Alberta_Institute_of_Technology.webp',
		},
	];
	return (
		<>
			<div className='bg-[#f0f8ff] '>
				<div className='py-[30px]'>
					<h2 className='font-bold flex justify-center text-[25px] text-[#323847]'>
						Trusted by Leading Institutions
					</h2>
				</div>

				
					<Container maxWidth='md'>
						<TabsComponent />
					</Container>
			
				{/* <Container maxWidth='md '>
					<div className='py-[50px]'></div>

					<div className='grid grid-cols-12 gap-4 p-4'>
						{data.map(item => {
							return (
								<>
									<div className='col-span-3 '>
										<div className='flex justify-center  py-[10px] '>
											<img
												src={item.images}
												alt=''
												width='70%'
											/>
										</div>
									</div>
								</>
							);
						})}
					</div>

					<div className='flex justify-center'>
						{' '}
						<button className='bg-[#0064E1] px-[5px] py-[5px]  hover:bg-sky-500 my-[50px] text-[#ffffff] '>
							Work with us
						</button>
					</div>
				</Container> */}
				<div className='flex justify-center'>
					{' '}
					<button className='bg-[#0064E1] px-[5px] py-[5px]  hover:bg-sky-500 my-[30px] text-[#ffffff] '>
						Work with us
					</button>
				</div>
			</div>
		</>
	);
};

export default SchoolPageSeven;
