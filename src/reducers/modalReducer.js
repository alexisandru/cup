const modalReducer = (state = false, action) => {
	switch (action.type) {
		case "SHOW_MODAL":
			return state = true
		case "CLOSE_MODAL":
			return state = false
		default:
			return state
	}
}

export default modalReducer