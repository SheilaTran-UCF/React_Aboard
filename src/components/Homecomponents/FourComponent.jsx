import React from 'react';
import Typography from '@mui/material/Typography';
import windowPic from '../../assets/window.gif';

const FourComponent = () => {
	return (
		<>
			<div className='container my-0 mx-auto py-10'>
				<h2 className='font-bold text-[30px] text-center'>
					We Help Students Get Admitted Into the Best International
					Educational Institutions
				</h2>

{/* 
				<Typography
					variant='h4'
					component='div'
					sx={{
						flexGrow: 1,
						display: { lg: 'none', sm: 'block' },
					}}
				>
					<a href='/'>
						<img
							className='items-center'
							src={windowPic}
							width='450px'
						/>
					</a>
				</Typography> */}
				<img
				src={windowPic}
				width='100%'
				/>
			</div>
		</>
	);
};

export default FourComponent;
