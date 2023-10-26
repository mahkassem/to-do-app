import { useState } from 'react';
import { useRouter } from 'next/router';

import { useForm, Controller } from 'react-hook-form';
import Cookies from 'js-cookie';

import Button from '../ui/Button';

const users = [
  { username: 'zucker', password: '123456' },
  { username: 'felon', password: '123123' },
  { username: 'robon', password: 'secret' },
];

const LoginForm = ({ userName, userId, userAvatar }) => {

	const router = useRouter();
	const { control, handleSubmit, formState: { errors } } = useForm();
	const [loginError, setLoginError] = useState(null);

	const onSubmit = (data) => {

		// Find the user by username
		const userToVerify = users.find(user => user.username === userName);

		if (userToVerify) {
			if (userToVerify.password === data.password) {

				// Password is correct
				// Save username and password to localStorage using js-cookie
				Cookies.set('userId', userId);
				Cookies.set('username', userName);
				Cookies.set('userAvatar', userAvatar);
				Cookies.set('password', userToVerify.password);
				
				// Redirect to /dashboard
				router.push('/');
			} else {

				// Password is incorrect
				setLoginError('Incorrect password');
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-5">
			<div className='grid gap-y-2'>
				<Controller
					name="password"
					control={control}
					render={({ field }) => <input {...field} placeholder='Enter Password' type="password" className='border border-zinc-300 focus:border-violet-500 rounded-md py-3 px-4 text-lg text-violet-800 outline-none ease-in-out duration-200' />}
				/>
				{
					loginError && <span className='text-xs text-red-500'>{loginError}</span>
				}
			</div>
			<Button className='py-4 !uppercase'>Login</Button>
		</form>
	);
}

export default LoginForm;
