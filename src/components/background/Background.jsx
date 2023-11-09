import React from 'react';
import { styled } from '@mui/styles';
import sky from './../../assets/sky.mp4';

const VideoContainer = styled('div')({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: -1,
});

const VideoElement = styled('video')({
	objectFit: 'cover',
	width: '100%',
	height: '100%',
});

const Background = () => {
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
