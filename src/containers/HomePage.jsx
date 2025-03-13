import React from 'react';
import { SideSection } from '../components/HomePage/SideSection/SideSection';
import { LoadingPage } from '../components/HomePage/LoadingPage/LoadingPage';

export const HomePage = () => {
	return (
		<div className='container'>
			<LoadingPage />
			<SideSection />
		</div>
	);
};

export default HomePage;
