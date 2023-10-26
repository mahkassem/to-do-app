import Button from "../ui/Button"
import Input from "../ui/Input"


const LoginForm = ({ userName, UserId }) => {


	return (
		<form className="grid gap-y-5">
			<Input
				id="password"
				type={'password'}
				name={'userPassword'}
				label={'Password:'}
				placeholder={'Input password'}
				autoComplete="new-password"
				className={'text-center'}
			/>
			<Button className='py-4 !uppercase'>login</Button>
		</form>
	)
}

export default LoginForm;