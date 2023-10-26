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
					<button className=" flex gap-x-3 items-center relative group">
					
						<span className="text-sm font-bold text-zinc-200">Vercel</span>
						<Image
							src={'https://robohash.org/felon-must.png'}
							alt="Vercel Logo"
							className='rounded-full bg-violet-100 border-2 border-violet-200 group-hover:border-violet-400 ease-in-out duration-200'
							width={40}
							height={40}
							priority
						/>
						<div className="bg-white rounded-lg shadow-lg py-2 grid absolute min-w-[180px] right-0 mt-14 group-hover:mt-12 top-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible ease-in-out duration-300">
							<button className='py-2 px-4 text-sm font-semibold hover:bg-zinc-200 text-zinc-700 hover:text-violet-700 ease-in-out duration-300'>logout</button>
						</div>
					</button>
				</div>
			</Container>
		</nav>
	)
}

export default Navbar;