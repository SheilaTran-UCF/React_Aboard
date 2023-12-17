import React from 'react';
import Input from '@mui/joy/Input';
import imgRight from '../assets/fs0a437k43QXmImKU5d7.png';
import logo from '../assets/logo .png';
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
					<div className='max-w-[70%]'>
						<div className='flex text-center justify-center '>
							<img src={logo} className='max-w-[50%]' />
						</div>

						<div></div>
						<h2 className='py-5'>Log In</h2>

						<p>Email</p>
						<Input
							className='border-2 border-[#bbbbbb] border-solid text-[10px]'
							placeholder='Enter Email'
							required
						/>
						<p>Password</p>
						<Input
							className='border-2 border-[#bbbbbb] border-solid text-[10px]'
							placeholder='Enter Password'
							type='password'
						/>

						<p className='flex items-center py-5'>
							<input className='mr-2 ' type='checkbox' /> Remember
							Me
						</p>

						<button class='bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2'>
							Sign In
						</button>

						<div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'></div>
						<div>
							<Divider>or</Divider>
						</div>
						<div className='relative py-3' >
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300'>
								<i className='fa-solid fa-envelope-open'></i>
							</div>
							<button className='bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2'>
								Log In with Google
							</button>
						</div>

						<div className='relative py-3'>
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300'>
								<i className='fa-solid fa-envelope-open'></i>
							</div>
							<button className='bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2'>
								Log In with Apple
							</button>
						</div>

						<div className='relative py-3'>
							<div className='absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300'>
								<i className='fa-solid fa-envelope-open'></i>
							</div>
							<button className='bg-gradient-to-r from-blue-400 to-cyan-200 w-full font-semibold rounded-full py-2'>
								Log In with Facebook
							</button>
						</div>


						<div class="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                <p>Don't have an account? <a class="text-neon-blue font-semibold cursor-pointer">Sign up</a></p>
                <p>Forgot password? <a class="text-neon-blue font-semibold cursor-pointer">Reset password</a></p>
                <p>Don't have a password yet? <a class="text-neon-blue font-semibold cursor-pointer">Set password</a></p>
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
