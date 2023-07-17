import { useContext, useState } from 'react'
import './styles/login.css'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/user-context'
import { useNavigate } from 'react-router-dom'
import getUserFromLocal from '../utils/get-local-user'
import saveUserToLocal from '../utils/save-local-user'

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	})
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target
		setLoginData((data) => ({ ...data, [name]: value }))
	}

	const loginUser = async (e) => {
		e.preventDefault()
		// login to endpoint
		if (loginData.email != '' && loginData.password != '') {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData),
			}

			fetch('http://46.101.67.209/auth/login', requestOptions)
				.then((res) => {
					console.log(res)
					// save token to local
					saveUserToLocal('tokennn')

					// set user context
					setUser(getUserFromLocal())

					// push to chatroom page
					navigate('/chat')
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<div className='login--page'>
			<form method='post' onSubmit={loginUser} className='form'>
				<p className='form-header'>Login here!</p>

				<div className='form-input'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						placeholder='Your email here'
						name='email'
						id='email'
						value={loginData.email}
						onChange={handleChange}
					/>
				</div>

				<div className='form-input'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						placeholder='Your password here'
						name='password'
						id='password'
						value={loginData.password}
						onChange={handleChange}
					/>
				</div>

				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default Login
