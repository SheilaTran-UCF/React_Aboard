import React from 'react';
import Input from '@mui/joy/Input';
import imgRight from '../assets/fs0a437k43QXmImKU5d7.png';
import logo from '../assets/logo .png';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';

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
						<p >Email</p>
						<Input className='border-2 border-[#bbbbbb] border-solid text-[10px]'
							placeholder='Enter Email'
							required
						/>
						<p>Password</p>
						<Input placeholder='Enter Password' type='password'  />


            <Checkbox className='py-[4]' label="Remember me" defaultChecked />
            <br/>
						<Button type='submit'>Login</Button>
					</div>
				</div>

				<div className='col-span-6 '>
					<img src={imgRight} width='100%' />
				</div>
			</div>
		</>
	);
};

export default Login;
