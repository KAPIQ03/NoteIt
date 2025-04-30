import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import style from './LogIn_SignIn.module.css';
import { FaArrowRight } from 'react-icons/fa6';

export const LogIn = () => {
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
		const data = JSON.parse(JSON.stringify(e));
		if (validateEmail(data.email)) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
			setEmailError(true);
		}
		if (validateEmail(data.email) && data.password ==='a') {
			navigate('/AppPage'); //Nawigacja do nowej ścieżki
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
					Nieprawidłowy login lub hasło
				</span>
				<button type='submit'>
					<p>Zaloguj</p>
					<FaArrowRight className={style.arrow} />
				</button>
			</form>
			<span> Nie masz jeszcze konta?</span>
			<Link to='/signin/'>
				<span>Zarejestruj się</span>
			</Link>
		</div>
	);
};
