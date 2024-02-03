import React from 'react';
import { Container } from '@mui/material';

const SchoolPageFive = () => {
	const data = [
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Student_Diversity.webp',
			name: 'Increase Student Diversity',
		},
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Receive_Quality_Applications.webp',
			name: 'Receive Quality Applications',
		},
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Approved_Recruiter_Network2.webp',
			name: 'Approved Recruiter Network',
		},
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Document_Verification.webp',
			name: 'Document Verification',
		},
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Promotional_Channels.webp',
			name: 'Promotional Channels',
		},
		{
			image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/Applicant_Matching.webp',
			name: 'Applicant Matching',
		},
	];

	return (
		<>
			<div className='bg-[#f0f8ff] '>
				<Container maxWidth='md '>
					

					<div className='py-[50px]'>
						<h1 className='text-center font-bold text-[25px] '>
							Expanding Our International Reach
						</h1>
						<p className=' text-center text-[11px]'>
							Attract the best students from around the world with
							ApplyBoard.
						</p>
					</div>

					<div className='grid grid-cols-12 gap-4 p-4'>
						{data.map(item => {
							return (
								<>
									<div className='col-span-4 pb-[20px]'>
										<div className='flex justify-center  '>
											<img
												src={item.image}
												alt=''
												width='30%'
											/>
										</div>

										<div className='flex justify-center'>
									
											<h2 className='font-bold text-center text-[12px] max-w-[55%]'>
												{item.name}
											</h2>
											
											
										</div>
									</div>
								</>
							);
						})}
					</div>
					<div className='flex justify-center '>
						{' '}
						<button className='bg-[#0064E1] px-[5px] py-[5px] rounded-[8px] hover:bg-sky-700 my-[50px] text-[#ffffff] '>
							Let get start
						</button>
					</div>
				</Container>
			</div>
		</>
	);
};

export default SchoolPageFive;
