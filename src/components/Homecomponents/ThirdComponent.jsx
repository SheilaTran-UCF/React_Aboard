

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pic1Img from '../../assets/pic1.jpeg';
import pic2Img from '../../assets/pic2.jpeg';
import pic3Img from '../../assets/pic3.jpeg';

export default function ThirdComponent() {
	const data = [
		{
			listClient: [],
			_id: '6556b10507b48bd6661d2339',
			name: 'Students',
			detail: 'Are you a student looking to study abroad in Canada, the United States, the United Kingdom, Australia, or Ireland? Let our team of experts guide you through your journey.',
			dateStart: '15/02/2023',
			plant: 'Máy bay',
			buttonName: 'Student Registration',
			pic:pic1Img
			
		},
		{
			_id: '6556b10507b48bd6661d24888',
			name: 'Partner schools',
			detail: 'Become an ApplyBoard partner institution to diversify your campus by attracting qualified students from around the world. Connect with our Partner Relations team here.',
			dateStart: '15/02/2024',
			plant: 'Máy bay',
			buttonName: 'Partner Inquiry',
			pic:pic2Img
			
		},
		{
			_id: '6556b10507b48bd6661d7888',
			name: 'Recruitment partners',
			detail: 'Do you recruit prospective students who want to study in Canada, the United States, the United Kingdom, Australia, or Ireland? Become an ApplyBoard Recruitment Partner.',
			dateStart: '15/02/2025',
			plant: 'Máy bay',
			buttonName: 'Recruiter Registration',
			pic:pic3Img
		},
	];
	return (
		
		<div className="text-center">
			<h1 className="text-center font-bold">Get started With ApllyBoard</h1>
			<div className='grid grid-cols-12 gap-4 p-4 text-center'>
			
			{data.map(value => {
				return (
					<>
						<Card className='col-span-12 md:col-span-4 '>
						{/* {value.pic} */}
							<img src={value.pic} width='100%'/>
							<CardContent className=''>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
								>
									<h1 className='font-bold sx-[10%] flex justify-center text-[20px] '>
										{value.name}
									</h1>
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									{value.detail}
								</Typography>
							</CardContent>
							<CardActions className='flex justify-center'>
								<Button size='small' variant='contained'>
									{value.buttonName}
								</Button>
							</CardActions>
						</Card>
					</>
				);
			})}
		</div>
		</div>
	);
}
