import { Fragment } from 'react';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
	<Fragment>

		<Navbar />

		<Main>
			{children}
		</Main>

		<Footer />

	</Fragment>
  )
}

export default Layout;