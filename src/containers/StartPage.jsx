import React from 'react';
import { SideSection } from '../components/StartPage/SideSection/SideSection';
import { LoadingPage } from '../components/StartPage/LoadingPage/LoadingPage';

export const StartPage = () => {
	return (
		<div className='container'>
			<LoadingPage />
			<SideSection />
		</div>
	);
};

