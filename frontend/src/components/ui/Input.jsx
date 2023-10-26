import React from 'react'

const Input = ({ type, onChange, placeholder, ariaHidden, field, autoComplete, value, name, id, className }) => {
  return (
	<input 
		name={name}
		value={value}
		onChange={onChange}
		type={type}
		id={id}
		aria-hidden={ariaHidden}
		autoComplete={autoComplete}
		{...field}
		placeholder={placeholder}
		className={`border border-zinc-300 focus:border-violet-500 rounded-md py-3 px-4 text-lg text-violet-800 outline-none ease-in-out duration-200 ${className}`}
	/>
  )
}

export default Input
