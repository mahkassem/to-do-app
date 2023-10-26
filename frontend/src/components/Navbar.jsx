import { useRouter } from 'next/router';

import Image from 'next/image';

import Cookies from 'js-cookie';

import Container from './ui/Container';

const  Navbar = () => {

	const router = useRouter();

	const password = Cookies.get('password');
	const username = Cookies.get('username');
	const userAvatar = Cookies.get('userAvatar');

	const logout = () => {
		// Remove the 'userId' cookie
		Cookies.remove('userId');

		// Remove the 'username' cookie
		Cookies.remove('username');

		// Remove the 'userAvatar' cookie
		Cookies.remove('userAvatar');

		// Remove the 'password' cookie
		Cookies.remove('password');

		router.push('/users');
	}

	const userNavLoggedin = () => {
		if (password) {
			return (
				<div className=" flex cursor-pointer gap-x-3 items-center relative group">
						
				<span className="text-sm font-bold text-zinc-200 capitalize">{username}</span>
				<Image
					src={userAvatar}
					alt="Vercel Logo"
					className='rounded-full bg-violet-100 border-2 border-violet-200 group-hover:border-violet-400 ease-in-out duration-200'
					width={40}
					height={40}
					priority
				/>
				<div className="bg-white rounded-lg shadow-lg py-2 grid absolute min-w-[180px] right-0 mt-14 group-hover:mt-12 top-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible ease-in-out duration-300">
					<button
						onClick={logout}
						className='py-2 px-4 text-sm font-semibold hover:bg-zinc-200 text-zinc-700 hover:text-violet-700 ease-in-out duration-300'
					>logout</button>
				</div>
			</div>
			)
		}
	}

	return (
		<nav className='bg-zinc-900 py-3 shadow-lg'>
			<Container>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-x-3">
						<Image
							src="/next.svg"
							alt="Vercel Logo"
							className='dark:invert'
							width={40}
							height={40}
							priority
						/>
						<p className="text-zinc-100 font-medium">Todo App</p>
					</div>
					{userNavLoggedin()}
				</div>
			</Container>
		</nav>
	)
}

export default Navbar;