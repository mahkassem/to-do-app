import Card from '../ui/Card';
import UserItem from './UserItem';

const users = [
	{
		id: 1,
		name: "Zucker Ping",
		avatar: "https://robohash.org/zucker-ping.png",
		username: "zucker"
	},
	{
		id: 2,
		name: "Felon Must",
		avatar: "https://robohash.org/felon-must.png",
		username: "felon"
	},
	{
		id: 3,
		name: "Robon Wood",
		avatar: "https://robohash.org/robon-wood.png",
		username: "robon"
	}
];

const UserList = () => {

	const usersRender = () => {
		return (
			users.map((user) => (
				<UserItem
					key={user.id}
					name={user.name}
					username={user.username}
					avatar={user.avatar}
				/>
			))
		)
	}

	return (
		<Card className='sm:w-8/12 lg:w-6/12 mx-auto px-5 py-6'>
			<h1 className="text-violet-600 text-center md:text-start font-semibold text-lg xl-text-xl 2xl:text-2xl mb-1">Select Your Account</h1>
			<p className='text-zinc-500 text-center md:text-start'>choose one and play on To-Dos:</p>
			<br />
			<ul className='grid gap-y-3 max-h-96 overflow-y-auto'>{usersRender()}</ul>
		</Card>
	)
}

export default UserList;