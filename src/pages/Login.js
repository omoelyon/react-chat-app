import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/login.css'
import { UserContext } from '../contexts/user-context'

import getUserFromLocal from '../utils/get-local-user'
import saveUserToLocal from '../utils/save-local-user'

import axios from 'axios'

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

		if (loginData.email != '' && loginData.password != '') {
			const options = {
				method: 'POST',
				// url: 'http://46.101.67.209/auth/login',
				url: 'http://localhost:9065/auth/login',
				headers: { 'Content-Type': 'application/json' },
				data: { email: loginData.email, password: loginData.password },
			}

			axios
				.request(options)
				.then((response) => {
					console.log(response.data)

					// save token to local
					saveUserToLocal(response.data.token)

					// set user context
					setUser(getUserFromLocal())

					// push to chatroom page
					setTimeout(() => {
						return navigate('/')
					}, 1000)
				})
				.catch((error) => {
					console.error(error)
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
