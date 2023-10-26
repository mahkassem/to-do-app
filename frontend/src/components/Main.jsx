import React from 'react'
import Section from './ui/Section'

const Main = ({ children, className }) => {
	return (
		<main className={`${className}`}>
			<Section>
				{children}
			</Section>
		</main>
	)
}

export default Main
