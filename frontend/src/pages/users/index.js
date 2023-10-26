import axios from 'axios';

import UserList from '@/components/users/UserList';
import Layout from '../../layout';

const Users = ({ users }) => {
	return (
		<Layout>
			<UserList userList={users} />
		</Layout>
	)
}

export default Users;


export async function getServerSideProps() {
	try {
		const res = await axios.get('http://localhost:4000/users');
		const data = res.data;
		console.log('Data ===>', res.data);
		return {
			props: {
				users: data
			}
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				users: []
			}
		};
	}
}
  