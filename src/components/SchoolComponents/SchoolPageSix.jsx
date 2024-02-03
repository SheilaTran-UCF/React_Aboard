import React from 'react';

import { Container } from '@mui/material';

const SchoolPageSix = () => {
	const data = [
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/03/stuudents_check_eligibility_108.webp',
			step: 'Step 1',
			title: 'Students Check Their Eligibility',
			content:
				'Students complete a short survey and get matched to best-fit programs and institutions.',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/03/students_apply_schools_108.webp',
			step: 'Step 2',
			title: 'Students Apply',
			content:
				'Students select an institution and program, complete their profile, pay their fees, and submit the proper documentation.',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/03/students_get_accepted.webp',
			step: 'Step 3',
			title: 'Students Get Accepted',
			content:
				'The application is reviewed by the institution, and a letter of acceptance is issued.',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/03/students_apply_to_visa.webp',
			step: 'Step 4',
			title: 'Student Applies for Visa',
			content: 'The student goes through the visa application process',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/03/students_start_journey_108.webp',
			step: 'Step 5',
			title: 'Student Journey Begins',
			content:
				'The student sets off with bags packed ready to start their adventure on your campus.',
		},
	];

	return (
		<>
			<div className='bg-[##ffffff] '>
				<Container maxWidth='md '>
					<div className='py-[50px]'>
						<h1 className='text-center font-bold text-[25px] '>
							How It Works
						</h1>
					</div>


					<div className='flex justify-center flex-wrap'>
						{data.map(item => {
							return (
								<>
									<div className='w-[100%] md:w-[31%] px-[1%] pb-[20px]'>
										<div className='flex justify-center '>
											<img
												width='50%'
												src={item.images}
												alt=''
											/>
										</div>
										<div >
											<h5 className='text-center text-[14px]'>
												{item.step}
											</h5>
											<h2 className='text-'>
												{item.title}
											</h2>
											<p className='text-[12px]'>
												{item.content}
											</p>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</Container>
			</div>
		</>
	);
};

export default SchoolPageSix;
