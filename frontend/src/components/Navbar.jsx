import Image from 'next/image';

import Container from './ui/Container';

const  Navbar = () => {

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
					
				</div>
			</Container>
		</nav>
	)
}

export default Navbar;