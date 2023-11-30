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
		<div className='grid grid-cols-12 gap-4 bg-sky-500 py-5 px-11 text-white text-[10px] mx-3 my-4 '>
			<div className='col-span-3'>
				<ul>
					<a href='/'>
						<img src='/src/assets/logo .png' width='150px' />
					</a>
					<li>101 Frederick St,</li>
					<li>Kitchenqr, ON</li>
					<li>N2H 6R3</li>

					<li className='font-normal md:font-bold'>Get Social</li>

					<li>In </li>
				</ul>
			</div>
			<div className='col-span-3'>
				<ul>
					<div className='font-normal md:font-bold'>
						<li>Students</li>
						<li>Schools</li>
						<li>Recruiters</li>
					</div>

					<div>
						<li className='font-normal md:font-bold'>Discover</li>
						<li>Discover Programs</li>
						<li>Discover Schools</li>
						<li>Register</li>
					</div>
				</ul>
			</div>
			<div className='col-span-3'>
				<ul>
					<li className='font-normal md:font-bold'>About</li>
					<li>Our Story</li>
					<li>Carrers</li>
					<li>Blog</li>
					<li>Press</li>
					<li>Life</li>
					<li>LeaderShip</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className='col-span-3'>
				<ul>
					<li className='font-normal md:font-bold'>Resources</li>
					<li>UK Resources</li>
					<li>AU Resource</li>
					<li className='font-normal md:font-bold'>Legal</li>
					<li>Privacy & cookies</li>
					<li>Policy</li>
					<li>Term & conditions</li>
					<li>ApplyBoard Fees</li>
					<li>Modern Slavery</li>
					<li>Statement</li>
				</ul>
			</div>
			////////////////////////
			<footer>
				<h2>@2023-2050 ApplyBoard Inc</h2>
			</footer>
		</div>
	);
}
