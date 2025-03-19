import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import style from './SideSection.module.css';
import { FaArrowRight } from 'react-icons/fa6';

const LogIn = () => {
	const { register, handleSubmit } = useForm();
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);

	const navigate = useNavigate();

	const validateEmail = email => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const emailErrorClear = e => {
		if (validateEmail(e.target.value)) {
			setEmailError(false);
			setIsEmailValid(false);
		}
	};
	const passwordErrorClear = e => {
		if (e.target.value !== '') {
			setIsPasswordValid(false);
			setPasswordError(false);
			setEmailError(false);
		}
	};
	const onSubmit = e => {
		console.log('Form Submitted');
		const data = JSON.parse(JSON.stringify(e));
		console.log(data);
		if (validateEmail(data.email)) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
			setEmailError(true);
		}
		if (validateEmail(data.email) && data.password === 'a') {
			navigate('/appContainer'); //Nawigacja do nowej ścieżki
		} else {
			setEmailError(true);
			setIsPasswordValid(true);
			setPasswordError(true);
		}
	};
	return (
		<div className={style.login}>
			<h3>Zaloguj się </h3>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div
					className={[style.textbox, emailError ? style.error : ''].join(' ')}>
					<input
						{...register('email')}
						type='mail'
						required
						onChange={emailErrorClear}
					/>
					<label>E-mail</label>
				</div>
				<span
					className={[style.alert, isEmailValid ? style.valid : ''].join(' ')}>
					Nieprawidłowy format adresu email
				</span>
				<div
					className={[style.textbox, passwordError ? style.error : ''].join(
						' '
					)}>
					<input
						{...register('password')}
						type='password'
						required
						onChange={passwordErrorClear}
					/>
					<label>Hasło</label>
				</div>
				<span
					className={[style.alert, isPasswordValid ? style.valid : ''].join(
						' '
					)}>
					Nieprawidłowy email lub hasło
				</span>
				<button type='submit'>
					<p>Zaloguj</p>
					<FaArrowRight className={style.arrow} />
				</button>
			</form>
			<span> Nie masz jeszcze konta?</span>
			<Link to='/signup/'>
				<span>Zarejestruj się</span>
			</Link>
		</div>
	);
};
const SignUp = () => {
	const navigate = useNavigate();
	const handleFormSubmit = event => {
		event.preventDefault();
		console.log('Form Submitted');
		navigate('/appContainer');
	};
	return (
		<div className={style.login}>
			<h3>Rejestracja</h3>
			<form onSubmit={handleFormSubmit}>
				<div className={style.textbox}>
					<input type='text' name='email' required />
					<label>E-mail</label>
				</div>
				<div className={style.textbox}>
					<input type='password' name='password' required />
					<label>Hasło</label>
				</div>
				<div className={style.textbox}>
					<input type='password' name='RePassword' required />
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
				<Route path='signup' element={<SignUp />} />
			</Routes>
		</div>
	);
};
