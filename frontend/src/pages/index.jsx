import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import UserList from '@/components/users/UserList';
import { Inter } from 'next/font/google';

import Image from 'next/image';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Fragment>

			<Navbar />

			<Main className="lg:py-8 xl:py-16">
				<UserList />
			</Main>

			<Footer />

		</Fragment>
	)
}