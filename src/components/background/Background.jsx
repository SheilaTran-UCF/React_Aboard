import React from 'react';
import { styled } from '@mui/styles';
import sky from './../../assets/sky.mp4';
import Index from './ServiceBackground';

const Background = () => {
	const VideoContainer = Index.VideoContainer
	

	return (
		
		<VideoContainer>
			
		
			<VideoElement autoPlay muted={true} loop>
				<source src={sky} type='video/mp4' />
				Your browser does not support the video tag.
			</VideoElement>
			</VideoContainer>
		
	);
};

export default Background;
