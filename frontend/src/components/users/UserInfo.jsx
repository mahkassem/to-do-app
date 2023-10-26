import Image from 'next/image';

const UserInfo = ({ avatar, name, username, className, children }) => {
  return (
	<div className={`flex gap-y-2 flex-col items-center ${className}`}>
		<Image
			src={avatar}
			alt={name}
			className='rounded-full bg-violet-100 border-2 border-violet-200 group-hover:border-violet-400 ease-in-out duration-200'
			width={80}
			height={80}
			priority
		/>
		<p className="text-zinc-600 font-bol capitalize font-bold">{name}</p>

		{children}
		
	</div>
  )
}

export default UserInfo
