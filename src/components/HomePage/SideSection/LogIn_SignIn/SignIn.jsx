import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import style from './LogIn_SignIn.module.css';
import { FaArrowRight } from 'react-icons/fa6';

export const SignIn = () => {
	const { register, handleSubmit } = useForm();
	const [isEmailValidate, setIsEmailValidate] = useState(false);
	const [isPasswordValidate, setIsPasswordValidate] = useState(false);
	const [passwordError, setPasswordError] = useState(true);
	const [password, setPassword] = useState('');
	const [isRePasswordValidate, setIsRePasswordValidate] = useState(false);
	const [rePasswordError, setRePasswordError] = useState(false);

	const navigate = useNavigate();

	const validateEmail = email => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const validatePassword = pwd => {
		return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/.test(pwd);
	};

	const mailCheck = e => {
		if (validateEmail(e.target.value)) {
			setIsEmailValidate(true);
		} else {
			setIsEmailValidate(false);
		}
	};
	const passwordCheck = e => {
		setPassword(e.target.value);
		if (validatePassword(e.target.value)) {
			setIsPasswordValidate(true);
			setPasswordError(false);
		} else {
			setIsPasswordValidate(false);
			setPasswordError(true);
		}
	};
	const rePaswordCheck = e => {
		if (password === e.target.value) {
			setIsRePasswordValidate(true);
			setRePasswordError(false);
		} else {
			setIsRePasswordValidate(false);
			setRePasswordError(true);
			console.log(e.target.value);
		}
	};

	const onSubmit = e => {
		console.log('Form Submitted');
		const data = JSON.parse(JSON.stringify(e));
		console.log(data);
		navigate('/appContainer');
	};
	return (
		<div className={style.login}>
			<h3>Rejestracja</h3>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className={style.textbox}>
					<input
						{...register('email')}
						type='mail'
						required
						onChange={mailCheck}
					/>
					<label>E-mail</label>
				</div>
				<div className={style.textbox}>
					<input
						{...register('password')}
						type='password'
						required
						onChange={passwordCheck}
					/>
					<label>Hasło</label>
				</div>
				<div
					className={[style.info, passwordError ? style.show : ''].join(' ')}>
					Hasło musi zawerać:
					<ul>
						<li
							className={[
								style.dontHave,
								/^.{8,}$/.test(password) ? '' : style.have,
							].join(' ')}>
							Co najmniej 8 znaków
						</li>
						<li
							className={[
								style.dontHave,
								/^(?=.*\d).+$/.test(password) ? '' : style.have,
							].join(' ')}>
							Cyfrę
						</li>
						<li
							className={[
								style.dontHave,
								/^(?=.*(\W|_)).+$/.test(password) ? '' : style.have,
							].join(' ')}>
							Znak specjalny
						</li>
						<li
							className={[
								style.dontHave,
								/^(?=.*[A-Z]).+$/.test(password) ? '' : style.have,
							].join(' ')}>
							Wielką literę
						</li>
					</ul>
				</div>
				<div className={style.textbox}>
					<input
						{...register('rePassword')}
						type='password'
						required
						onChange={rePaswordCheck}
					/>
					<label>Powtórz Hasło</label>
				</div>
				<span
					className={[style.alert, rePasswordError ? style.valid : ''].join(
						' '
					)}>
					Hasła nie są takie same
				</span>
				<button
					type='submit'
					disabled={
						!(isEmailValidate && isPasswordValidate && isRePasswordValidate)
					}>
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
