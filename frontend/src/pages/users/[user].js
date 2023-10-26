import axios from 'axios';
import Link from 'next/link';

import LoginForm from '@/components/login/LoginForm';
import Layout from '../../layout';
import Card from '@/components/ui/Card';
import UserInfo from '@/components/users/UserInfo';

const User = ({ userData }) => {

	return (
		<Layout>
			<div className="mb-10">
				<h1 className="text-violet-600 text-center font-bold text-xl xl:text-2xl mb-1 uppercase">sign in</h1>
				<p className='text-zinc-500 text-center'>Login to your account</p>
			</div>
			<Card className='sm:w-8/12 3xl:w-6/12 mx-auto px-6 py-9 grid gap-y-6'>
				<UserInfo
					name={userData.name}
					username={userData.username}
					avatar={userData.avatar}
				>
				<Link href="/users" className='text-blue-600 text-sm font-medium'>Not my account</Link>
				</UserInfo>
				<LoginForm username={userData.username} userId={userData.id} />
			</Card>
		</Layout>
	)
}

export default User;

export async function getStaticProps({ params }) {
	const userId = params.user; // This is the dynamic part of the URL
	try {
		const res = await axios.get(`http://localhost:4000/users/${userId}`);
		const userData = res.data;
		console.log(userData);
		return {
			props: {
				userData,
			},
		};
	} catch (error) {
		console.error(error);
	}
}


export async function getStaticPaths() {
	const users = [1, 2, 3]; // Replace with your actual user IDs

	// Create an array of objects with the params for each user
	const paths = users.map((user) => ({
		params: { user: user.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
}