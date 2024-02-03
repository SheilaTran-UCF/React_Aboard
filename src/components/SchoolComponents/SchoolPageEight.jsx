import React from 'react';
import { Container } from '@mui/material';
import group from '../../assets/page8.webp';

const SchoolPageEight = () => {
	const data = [
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/07/Application.webp',
			title: 'Vetted, Offer-Ready Applications, Delivered',
			content: 'Reduce your workload on application processing and follow-ups',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/08/Acceptance-Rate-50x50.png',
			title: 'Putting Students First',
			content: 'Founded by students for students—we care about every aspect of the student journey.',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/07/Platform.webp',
			title: 'Flexible Delivery',
			content: 'We match your processes and requirements—there is no need for integration',
		},
		{
			images: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/09/6.webp',
			title: 'Work With You, For You',
			content: 'Our aim is to free up your time and resources. We help you recruit efficiently and effectively.  ',
		},
	];
	return (
		<>
			<div className='py-[50px] flex justify-center'>
				<h2 className='max-w-[55%] font-bold text-[25px] '>
					An Easy-to-Use Platform Built to Deliver Quality
					Applications and More
				</h2>
			</div>
			<div className='flex display justify-center  '>
				<img width='520' height='515' src={group} />
			</div>
			<Container maxWidth='md '>
				

				<div className='grid grid-cols-12 gap-4 p-4'>
					{data.map(item => {
						return (
							<>
								<div className='col-span-3 w-[70%]'>
									<div className='flex justify-center  py-[10px] '>
										<img
											src={item.images}
											alt=''
											width='20%'
										/>
									</div>

                                    <div className=''>
											<h2 className='font-bold text-center text-sm/[6px] text-[#676a71] py-[10px]'>
												{item.title}
											</h2>
										</div>

                                        <div className='  '>
											<h2 className=' text-center text-sm/[2px] text-[#7f838e]'>
												{item.content}
											</h2>
										</div>
								</div>
							</>
						);
					})}
				</div>

			
			</Container>
		</>
	);
};

export default SchoolPageEight;
