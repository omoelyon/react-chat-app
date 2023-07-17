import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/user-context'

const ProtectedRoute = ({ children }) => {
	const { user } = useContext(UserContext)
	const isAuthenticated = user.isLoggedIn

	return isAuthenticated ? children : <Navigate to='/login' />
}
export default ProtectedRoute
