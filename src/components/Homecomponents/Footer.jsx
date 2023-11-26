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

const Grid = styled(MuiGrid)(({ theme }) => ({
	width: '100%',
	...theme.typography.body2,
	'& [role="separator"]': {
		margin: theme.spacing(0, 4),
	},
}));

export default function Footer() {
	const content = (
		<div>
			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
     Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
     Sed malesuada lobortis pretium.`}
		</div>
	);

	return (
		<Grid container>
			<Grid item s>
				{content}
			</Grid>
			<Divider orientation='vertical' flexItem>
				VERTICAL
			</Divider>
			<Grid item s>
				{content}
			</Grid>
		</Grid>
	);
}
