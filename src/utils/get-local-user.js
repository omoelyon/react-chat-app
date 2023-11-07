const getUserFromLocal = () => {
	const localObject = JSON.parse(localStorage.getItem('adeola-tk') || '{}')

	const user = {
		token: localObject.token,
		isLoggedIn: !!localObject.token,
	}

	return { ...user }
}

export default getUserFromLocal
