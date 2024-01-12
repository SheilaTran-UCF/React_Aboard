import React from 'react';
import Input from '@mui/joy/Input';
import imgRight from '../assets/fs0a437k43QXmImKU5d7.png';
import logo from '../assets/logo .png';
import apple_logo from '../assets/apple_logo.png';
import google_logo from '../assets/google_logo.png';
import facebook from '../assets/facebook1.png';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import Divider from '@mui/material/Divider';

const Login = () => {
	console.log(imgRight);
	return (
		<>
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-6 flex justify-center  '>
					<div className='max-w-[50%]'>
						<div className='flex'>
							<img src={logo} className='max-w-[30%]' />
						</div>

						<div></div>
						<h2 className='py-5'>Log In</h2>

						<p className='py-2 text-[12px]'>Email</p>
						<Input
							className='border-2 border-[#bbbbbb] border-solid text-[10px]'
							placeholder='Enter Email'
							required
						/>
						<p className='py-2 text-[12px]'>Password</p>
						<Input
							className='border-2 border-[#bbbbbb] border-solid text-[10px] '
							placeholder='Enter Password'
							type='password'
						/>

						<p className='flex items-center py-5'>
							<input className='mr-2 ' type='checkbox' /> Remember
							Me
						</p>

						{/* <button class='bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2'>
							Sign In
						</button> */}

						<button className='bg-[#0064E1] w-full text-[#ffffff] py-[8px] rounded-[8px]'>
							Log In
						</button>

						<div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'></div>
						<div>
							<Divider>or</Divider>
						</div>
						{/* <div className='relative py-3'>
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300 '>
								<FaGoogle
									className='cursor-pointer my-2'
									size={25}
								/>
							</div>
							<button className='bg-sky-400 w-full font-semibold rounded-full py-2 text-[12px]'>
								Log In with Google
							</button>
						</div> */}

						{/* <div className='relative py-3'>
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300'>
								<FaApple
									className='cursor-pointer my-2'
									size={25}
								/>
							</div>
							<button className='bg-sky-400 w-full font-semibold rounded-full py-2 text-[12px]'>
								Log In with Apple
							</button>
						</div> */}

						{/* <div className='relative py-3'>
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300'>
								<FaFacebook
									className='cursor-pointer my-2 '
									size={25}
								/>
							</div>
							<button className='bg-sky-400 w-full font-semibold rounded-full py-2 text-[12px]'>
								Log In with Facebook
							</button>
						</div> */}

						{/* ----------------- */}

						<div>
							<button className='flex w-[100%] border border-[#c3c3c3] py-[7px] rounded-[8px] items-center mb-[15px]'>
								<img
									src={google_logo}
									className='max-w-[100%] ml-[15px] mr-[30px]'
								/>
								<span className='text-xs'>Log In with google</span>
							</button>

							<button className='flex w-[100%] border border-[#c3c3c3] py-[7px] rounded-[8px] items-center mb-[15px]'>
								<img
									src={apple_logo}
									className='max-w-[100%] ml-[15px] mr-[30px]'
								/>
								<span className='text-xs'>Log In with Apple</span>
							</button>

							<button className='flex w-[100%] border border-[#c3c3c3] py-[7px] rounded-[8px] items-center'>
								<img
									src={facebook}
									className='w-[27px]   ml-[15px] mr-[25px]'
								/>
								<span className='text-xs'>Log In with Facebook</span>
							</button>
						</div>

						<div className='text-dull-white border-t border-white-light pt-4 space-y-2 text-[10px] left-12'>
							<p>
								Don't have an account?{' '}
								<a className='text-neon-blue font-semibold cursor-pointer'>
									Sign up
								</a>
							</p>
							<p>
								Forgot password?{' '}
								<a className='text-neon-blue font-semibold cursor-pointer'>
									Reset password
								</a>
							</p>
							<p>
								Don't have a password yet?{' '}
								<a className='text-neon-blue font-semibold cursor-pointer '>
									Set password
								</a>
							</p>
							<br />
							<br />
						</div>
					</div>
				</div>

				{/* ---------------------------------------------------------------- */}

				<div className='col-span-6 '>
					<img src={imgRight} width='100%' />
				</div>
			</div>
		</>
	);
};

export default Login;
