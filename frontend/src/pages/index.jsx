import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main>
			<h1 className="text-vaiolet-600 text-violet-600 text-xl font-bold text-center capitalize">test tailwind</h1>
		</main>
	)
}
