import React from 'react';
import student from '../assets/student1.png';
import apple_logo from '../assets/apple_logo.png';
import google_logo from '../assets/google_logo.png';
import facebook from '../assets/facebook1.png';
import { IoPerson } from "react-icons/io5";


import { FaBeer } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5";

const StudentRegister = () => {
	return (
		<>
			<div className='grid grid-cols-12 gap-4 p-4 '>
				<div className='col-span-12 md:col-span-6'>
					<img src={student} />
				</div>

				<div className='col-span-12 md:col-span-6'>
					<div className='bg-[#fbfafa]'>
						<p className='text-center'>Sign up with</p>
						<div className='flex justify-center'>
							<button className='flex  bg-[#ffffff] text-[#060505] mx-[8px] my-[2px] px-[5px] py-[12px]  rounded-[8px] shadow-xl hover:bg-[#ececec] text-center'>
								<img
									src={facebook}
									className=' w-[20px] ml-[10px] mr-[10px]'
								/>
								<span className='text-xs'>Facebook</span>
							</button>
							<button className='flex  bg-[#ffffff] text-[#060505]  mx-[8px] my-[2px] px-[5px] py-[12px]  rounded-[8px] shadow-xl hover:bg-[#ececec]'>
								<img
									src={google_logo}
									className=' w-[16px] ml-[10px] mr-[10px]'
								/>
								<span className='text-xs'>Google</span>
							</button>
						</div>
						<br />
						<div className='flex justify-center'>
							<hr width='50%' align='center' />
						</div>

						<div className='flex justify-center'>
							<form>
								<h2 className='text-xs text-center my-10'>
									Or Sign up with your email
								
								</h2>

								<div className='flex justify-between relative'>

									<div className='absolute pl-[10px] top-[20%]'><i class="fa-solid fa-user"></i></div>
									<div><input className='text-xs pl-[60px] py-[10px] ' placeholder='First Name' type='text'/></div>

								
							
									
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentRegister;
