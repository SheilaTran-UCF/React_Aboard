import React from 'react';
import conversion from '../../assets/conversion.png';
import diversity from '../../assets/diversity.png';
import productivity from '../../assets/productivity.png';

const SchoolPageTwo = () => {
	return (
		<>
			<div className='grid grid-cols-12 gap-4 p-4 my-[45px] bg-[#f0f5ff]'>
				<div className='col-span-12 md:col-span-4 w-[80%] mx-[50px] '>
					<div className='flex justify-between'>
						<div className='mx-[20px] my-[20px]'>
							<img className='w-[100px]' src={conversion} />
						</div>
						<div>
							<span className='text-[8px]'>CONVERSION</span>
							<br />
							<span className='text-xs font-bold text-[10px]'>
								Quality Applications
							</span>
							<br />
							<span className='text-[8px]'>
								For every hundred students, we get fifteen more
								enrolled than others.{' '}
							</span>
						</div>
					</div>
				</div>

				{/*  */}

				<div className='col-span-12 md:col-span-4 w-[80%] mx-[30px]'>
					<div className='flex justify-between'>
						<div className=' mx-[20px] my-[20px]'>
							<img className='w-[100px]' src={diversity} />
						</div>
						<div>
							<span className='text-[8px]'>DIVERSITY</span>
							<br />
							<span className='text-xs font-bold text-[10px]'>
								Unmatched Diversity
							</span>
							<br />
							<span className='text-[8px]'>
								ApplyBoard students come from more than 150
								countries.
							</span>
						</div>
					</div>
				</div>

				{/*  */}

				<div className='col-span-12 md:col-span-4 w-[80%] mx-[30px]'>
                <div className='flex justify-between'>
                        <div className=' mx-[20px] my-[20px]'>
                            <img className='w-[100px]' src={productivity} /></div>
                        <div ><span className='text-[8px]'>PRODUCTIVITY / ROI</span>
						<br />
						<span className='text-xs font-bold text-[10px]'>
							Less Administration, More Education
						</span>
						<br />
						<span className='text-[8px]'>
							Partner schools spend 25% more time on things that
							matter.
						</span></div>
						
						
					</div>
				</div>
			</div>
		</>
	);
};

export default SchoolPageTwo;
