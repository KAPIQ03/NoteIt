import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './SideSection.module.css';
import { FaArrowRight } from 'react-icons/fa6';

const LogIn = () => {
	return (
		<div className={style.login}>
			<h3>Zaloguj się </h3>
			<form>
				<div className={style.textbox}>
					<input type='text' required />
					<label>E-mail</label>
				</div>
				<div className={style.textbox}>
					<input type='password' required />
					<label>Hasło</label>
				</div>
				<button type='submit'>
					<p>Zaloguj</p>
					<FaArrowRight className={style.arrow} />
				</button>
			</form>
			<span> Nie masz jeszcze konta?</span>
			<Link to='/SignUp/'>
				<span>Zarejestruj się</span>
			</Link>
		</div>
	);
};
const SignUp = () => {
	return (
		<div className={style.login}>
			<h3>Rejestracja</h3>
			<form>
				<div className={style.textbox}>
					<input type='text' required />
					<label>E-mail</label>
				</div>
				<div className={style.textbox}>
					<input type='password' required />
					<label>Hasło</label>
				</div>
				<div className={style.textbox}>
					<input type='password' required />
					<label>Powtórz Hasło</label>
				</div>
				<button type='submit'>
					<p>Zaloguj</p>
					<FaArrowRight className={style.arrow} />
				</button>
			</form>
			<span> Masz już konto?</span>
			<Link to='/'>
				<span>Zaloguj się</span>
			</Link>
		</div>
	);
};

export const SideSection = () => {
	return (
		<div className={style.container}>
			<Routes>
				<Route path='/' element={<LogIn />} />
				<Route path='/SignUp' element={<SignUp />} />
			</Routes>
		</div>
	);
};
