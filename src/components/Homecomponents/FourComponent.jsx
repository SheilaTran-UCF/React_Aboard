import React from 'react';
import Typography from '@mui/material/Typography';

const FourComponent = () => {
	return (
		<>
			<div>
				We Help Students Get Admitted Into the Best International
				Educational Institutions
			</div>

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
						className='flex  items-center'
						src='/src/assets/window.gif'
						width='150px'
					/>
				</a>
			</Typography>
            <a href='/'>
					<img
						className='flex  items-center'
						src='/src/assets/window.gif'
						width='150px'
					/>
				</a>
		</>
	);
};

export default FourComponent;
