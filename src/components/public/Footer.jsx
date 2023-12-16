// import React from 'react';

// const Footer = () => {
// 	return <div className='grid grid-cols-12 gap-4 p-4'>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>
//     <Card className='col-span-3'>Hi</Card>

//     </div>;
// };

// export default Footer;

import * as React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';

// const Grid = styled(MuiGrid)(({ theme }) => ({
// 	width: '100%',
// 	...theme.typography.body2,
// 	'& [role="separator"]': {
// 		margin: theme.spacing(0, 4),
// 	},
// }));

export default function Footer() {
	return (
		<>
		<div className="bg-[#004dc0]" >
		<div className='grid grid-cols-12 gap-4  py-5 px-11 text-white text-[10px] my-4 ' >
				<div className='col-span-3 mx-10'>
					<ul>
						<a href='/'>
							<img
								src='/src/assets/logo .png'
								width='120px'
								className='py-5'
							/>
						</a>
						<li>101 Frederick St,</li>
						<li>Kitchenqr, ON</li>
						<li>N2H 6R3</li>

						<div className='font-normal md:font-bold py-8  '>
							{' '}
							<li>Get Social</li>
							<div className='flex justify-between pt-4 max-w-[100px] w-full'>
								<FaTwitter
									className='cursor-pointer'
									size={10}
								/>
								<FaFacebook
									className='cursor-pointer'
									size={10}
								/>
								<FaInstagram
									className='cursor-pointer'
									size={10}
								/>
								<FaLinkedinIn
									className='cursor-pointer'
									size={10}
								/>
							</div>
						</div>
					</ul>
				</div>
				<div className='col-span-3 py-5 mx-10 '>
					<ul>
						<div className='font-normal md:font-bold py-5 '>
							<li>Students</li>
							<li className='py-2'>Schools</li>
							<li>Recruiters</li>
						</div>

						<div>
							<li className='font-normal md:font-bold py-2'>
								Discover
							</li>
							<li>Discover Programs</li>
							<li className='py-2'>Discover Schools</li>
							<li>Register</li>
						</div>
					</ul>
				</div>
				<div className='col-span-3 py-8 mx-10'>
					<ul>
						<li className='font-normal md:font-bold py-2'>About</li>
						<li>Our Story</li>
						<li className='py-2'>Carrers</li>
						<li>Blog</li>

						<li className='py-2'>Press</li>
						<li>Life</li>
						<li className='py-2'>LeaderShip</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className='col-span-3 py-8 mx-10'>
					<ul>
						<li className='font-normal md:font-bold py-2'>
							Resources
						</li>
						<li>UK Resources</li>
						<li className='py-2'>AU Resource</li>
						<li className='font-normal md:font-bold py-2'>Legal</li>
						<li>Privacy & cookies Policy</li>
						<li className='py-2'>Term & conditions</li>
						<li>ApplyBoard Fees</li>
						<li className='py-2'>Modern Slavery</li>
					</ul>
				</div>

				
			</div>
			<div className='flex justify-center text-white py-10'>
					<h2>@2023-2050 ApplyBoard Inc</h2>
				</div>
		</div>
			
		</>
	);
}
