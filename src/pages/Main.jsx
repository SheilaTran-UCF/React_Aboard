// import Background from '../components/background/Background';
import { Box, Button } from '@mui/material';
const Main = () => {
	return (
		<Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
			{/* <MainComponent/> */}
			{/* <Background /> */}

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100vh',
					backgroundColor: 'transparent',
				}}
			>
				<h1 class='elementor-heading-title elementor-size-default'>
					We Are on a Mission to Educate the World hello
				</h1>

				<Button variant='outlined'>
					I am a student exploring studying abroad
				</Button>

				<Button variant='outlined'>Register</Button>

				<Button variant='outlined'>Register</Button>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100vh',
					backgroundColor: 'yellowgreen',
				}}
			>
				<h2>Hello </h2>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					backgroundColor: 'yellow',
				}}
			/>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					backgroundColor: 'blue',
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100vh',
					backgroundColor: 'cyan',
				}}
			>
				<h3>goood</h3>
			</Box>
		</Box>
	);
};

export default Main;
