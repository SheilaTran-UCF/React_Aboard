import React from 'react';
import Typography from '@mui/material/Typography';

const FourComponent = () => {
	return (
		<>
			<div >
				<div className='font-bold '>
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
							width='450px'
						/>
					</a>
				</Typography>
			</div>
		</>
	);
};

export default FourComponent;
