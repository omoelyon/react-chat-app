const saveUserToLocal = (token) => {
	const localObject = {
		token,
	}

	localStorage.setItem('adeola-tk', JSON.stringify(localObject))
}

export default saveUserToLocal
