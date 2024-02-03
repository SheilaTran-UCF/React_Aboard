import React from 'react'
import group from '../../assets/group1.png';

const SchoolPageOne = () => {
  return (
   <>
   <div className='grid grid-cols-12 gap-4 p-4 my-[45px] '>
			<div className='col-span-12 md:col-span-6 w-[80%] mx-[50px]'>
					<p className='font-bold text-[30px] my-[25px] '>Be Seen by 100,000+ Students Every Month</p>
					<p className='text-xs text-[#323847]'>
						Increase your global presence and the number of
						qualified students from a single, easy-to-use platform
						trusted by more than 1,500 institutions worldwide.
					</p>
					<button className='bg-[#0064E1] px-[5px] py-[5px] rounded-[8px] hover:bg-sky-700 my-[50px] text-[#ffffff]'>Work with us</button>
				</div>
				<div className='col-span-12 md:col-span-6 w-[80%]'>
				<img src={group}/>
				</div>
			</div>
   </>
  )
}

export default SchoolPageOne