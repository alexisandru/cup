const finishBuy = (state = false, action) => {
	switch (action.type) {
		case "FINISH_BUY":
			return state = action.payload
		default:
			return state
	}
}


export default finishBuy