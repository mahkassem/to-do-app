import Link from 'next/link';

import LoginForm from "@/components/login/LoginForm";
import Layout from "../../../layout";

import Card from "@/components/ui/Card";
import UserInfo from '@/components/users/UserInfo';

const index = () => {
  return (
	<Layout>
		<div className="mb-10">
			<h1 className="text-violet-600 text-center font-bold text-xl xl:text-2xl mb-1 uppercase">sign in</h1>
			<p className='text-zinc-500 text-center'>Login to your account</p>
		</div>
		<Card className='sm:w-8/12 3xl:w-6/12 mx-auto px-6 py-9 grid gap-y-6'>
			
			<UserInfo
				name={'Vercel Logo'}
				username={'Zucker Ping'}
				avatar={'https://robohash.org/felon-must.png'}
			>
				<Link href="/" className='text-blue-600 text-sm font-medium'>Not my account</Link>
			</UserInfo>

			<LoginForm />

		</Card>
	</Layout>
  )
}

export default index
