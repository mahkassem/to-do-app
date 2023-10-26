import Button from "../ui/Button"
import Input from "../ui/Input"


const LoginForm = () => {
  return (
	<form className="grid gap-y-5">
		<Input
			type={'password'}
			name={'userPassword'}
			label={'Password:'}
			placeholder={'Input password'}
		/>
		<Button className='py-4 !uppercase'>login</Button>
	</form>
  )
}

export default LoginForm
