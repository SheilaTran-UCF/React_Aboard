import React from 'react';

function StudentSecondPage() {
	return (
		<div className='grid grid-cols-12 gap-4'>
			<div className='col-span-9 flex justify-center '>
				<div className='  max-w-[50%] py-12'>
					<div className='flex font-bold text-[20px] '>
						Your Study Abroad Success Comes First
					</div>
					<div className=''>
						<p className='text-[12px] font-serif py-5'>
							Wondering how to apply to universities and colleges
							abroad? You make it happen, but ApplyBoard makes it
							easy. Choose from{' '}
							<strong>
								{' '}
								140,000+ programs at 1,750+ partner institutions{' '}
							</strong>{' '}
							around the world!
						</p>
						<p className='text-[12px] font-serif py-3'>
							Let our team of experts guide you through your study
							abroad journey in five simple steps:
						</p>
					</div>
				</div>
			</div>
			<div className='absolute  py-12 right-1'>
				<div className='col-span-3 '>We've Help</div>
				<img src='https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/02/6000helped.svg' />
				<p className='text-[24px] font-serif py-3'>
					Students Find Study Abroad Success
				</p>

				
			</div>
		</div>
	);
}

export default StudentSecondPage;
