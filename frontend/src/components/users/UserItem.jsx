import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'

const UserItem = ({ avatar, name, username }) => {
	return (
		<div className='bg-zinc-100 p-2 rounded-md border border-zinc-200 hover:border-violet-300 group ease-in-out duration-300 flex items-center justify-between'>
			<div className="flex items-center gap-x-3">
				<Image
					src={avatar}
					alt="Vercel Logo"
					className='rounded-full bg-violet-100 border-2 border-violet-200 group-hover:border-violet-400 ease-in-out duration-200'
					width={40}
					height={40}
					priority
				/>
				<div className="flex flex-col gap-y-1">
					<span className="text-sm xl:text-base 3xl:text-lg font-semibold text-violet-500 capitalize">{name}</span>
					<span className="text-xs xl:sm text-zinc-400 lowercase">@{username}</span>
				</div>
			</div>
			<Button className='text-sm opacity-0 group-hover:opacity-100 ease-in-out duration-300'>Login</Button>
		</div>
	)
}

export default UserItem
