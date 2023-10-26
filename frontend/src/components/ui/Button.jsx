import React from 'react'

const Button = ({ onClick, className, type, children }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-4 py-2 capitalize font-medium rounded-md bg-violet-600 text-white hover:bg-violet-700 ease-in-out duration-300 ${className}`}
		>
			{children}
		</button>
	)
}

export default Button;