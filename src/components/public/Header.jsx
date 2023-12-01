import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
const drawerWidth = 240;
const navItems = [
	{
		text: 'Student',
		link: '/student',
	},
	{
		text: 'Recruitment Partner',
		link: '/partner',
	},
	{
		text: 'School',
		link: '/school',
	},
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<img src='/src/assets/logo .png' width='150px' />
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component='nav'>
				<Container>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							{/* <HomeIcon /> */}
						</IconButton>

						<Typography
							variant='h4'
							component='div'
							sx={{
								flexGrow: 1,
								display: { xs: 'none', sm: 'block' },
							}}
						>
							<a href='/'>
								<img
									src='/src/assets/logo .png'
									width='150px'
								/>
							</a>
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map(item => (
								<Button variant='contained' key={item} sx={{ color: '#fff000' }}>
									<Link
										className='text-[#fff] '
										to={item.link}
									>
										{item.text}
									</Link>
								</Button>
							))}
						</Box>

						<div className='mx-[100px] flex'>
							<div className=''>
								<IconButton
									className='icon-menu '
									aria-label='open drawer'
									edge='start'
								
									onClick={handleDrawerToggle}
									sx={{ mr: 2 }}
								>
									<MenuIcon />
								</IconButton>
							</div>

							<div className='mx-2'>
								<Button variant='contained'>Login</Button>
							</div>
							<div className='mx-2'>
								<Button variant='contained'>Register</Button>
							</div>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

export default DrawerAppBar;
