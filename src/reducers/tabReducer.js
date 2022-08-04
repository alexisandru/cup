const tabReducer = (state = "cupcake", action) => {
	switch (action.type) {
		case "SET_TAB":
			return state = action.payload
		default: 
			return state
	}
}

export default tabReducer

