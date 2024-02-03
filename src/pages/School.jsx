import React from 'react';
import Header from '../components/public/Header';

import SchoolPageOne from '../components/SchoolComponents/SchoolPageOne';
import SchoolPageTwo from '../components/SchoolComponents/SchoolPageTwo';
import SchoolPageThree from '../components/SchoolComponents/SchoolPageThree';
import SchoolPageFour from '../components/SchoolComponents/SchoolPageFour';
import SchoolPageFive from '../components/SchoolComponents/SchoolPageFive';
import SchoolPageSix from '../components/SchoolComponents/SchoolPageSix';
import SchoolPageSeven from '../components/SchoolComponents/SchoolPageSeven';
import SchoolPageEight from '../components/SchoolComponents/SchoolPageEight';

const School = () => {
	return (
		<>
			<SchoolPageOne />
			<SchoolPageTwo />
			<SchoolPageThree />
			<SchoolPageFour />
			<SchoolPageFive />
			<SchoolPageSix/>
			<SchoolPageSeven/>
			<SchoolPageEight/>
		</>
	);
};

export default School;
