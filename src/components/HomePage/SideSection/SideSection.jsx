import React from 'react';
import { Routes, Route} from 'react-router-dom';
import style from './SideSection.module.css';
import {SignIn} from './LogIn_SignIn/SignIn'
import {LogIn} from './LogIn_SignIn/LogIn';

export const SideSection = () => {
	return (
		<div className={style.container}>
			<Routes>
				<Route path='/' element={<LogIn />} />
				<Route path='signin' element={<SignIn />} />
			</Routes>
		</div>
	);
};
