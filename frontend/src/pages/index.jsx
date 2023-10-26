import Cookies from 'js-cookie';

import Layout from '../layout';

export default function Home() {

	// Get the username and password from cookies
	const userId = Cookies.get('userId');

	// Check if the values exist in cookies
	if (userId) {
		// Do something with the username and password
		console.log('userId:', userId);
	} else {
		// Handle the case when the values are not found in cookies
		console.log('Username and/or password not found in cookies');
	}

	return (
		<Layout>
			Dashboard
		</Layout>
	)
}






