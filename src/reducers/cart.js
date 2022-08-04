const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_CART":
			const itemFound = state.findIndex(item => item.id === action.payload.id)
			if (itemFound === -1) {
				return [...state, action.payload]
			} else {
				const item = state.find(i => action.payload.id === i.id)
				const allItems = state.filter(i => action.payload.id !== i.id)
				return [
					...allItems,
					{
						id: item.id,
						cant: action.payload.cant
					}
				]
			}
		case "CLEAR_CART":
			return []
		case "REMOVE_CART":
			return state.filter(item => item.id !== action.payload)
		default:
			return state
	}
}

export default cartReducer