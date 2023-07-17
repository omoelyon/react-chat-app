import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ScrollToTop from '../utils/scrollToTop'
import ChatRoom from '../components/ChatRoom' // should be a page
import Login from '../pages/Login'
import ProtectedRoute from './protected-route'

function AppRouter() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route
					path='/chat'
					element={
						<ProtectedRoute>
							<ChatRoom />
						</ProtectedRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
