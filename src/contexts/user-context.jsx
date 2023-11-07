import { createContext, useState } from 'react'
import getUserFromLocal from '../utils/get-local-user'

const defaultValue = {
	user: getUserFromLocal(),
	setUser: (user) => {},
}
export const UserContext = createContext(defaultValue)

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(getUserFromLocal())
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
export default UserContextProvider
