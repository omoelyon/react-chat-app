const saveUserToLocal = (token, email) => {
	const localObject = {
		token,
		email,
	}

	localStorage.setItem('adeola-tk', JSON.stringify(localObject))
}

export default saveUserToLocal
