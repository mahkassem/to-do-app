import React from 'react'

const Input = ({ type, onChange, placeholder, label, value, name, id }) => {
  return (
	<input 
		name={name}
		value={value}
		onChange={onChange}
		type={type}
		id={id}
		placeholder={placeholder}

		className="border border-zinc-300 focus:border-violet-500 rounded-md py-3 px-4 text-center text-lg text-violet-800 outline-none ease-in-out duration-200"
	/>
  )
}

export default Input
