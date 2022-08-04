export const increment = () => {
	return {
		type: "INCREMENT",
	}
}

export const decrement = () => {
	return {
		type: "DECREMENT"
	}
}


export const finish = (e) => {
	return {
		type: "FINISH_BUY",
		payload: e
	}
}

export const addCart = (item) => {
	return {
		type: "ADD_CART",
		payload: item
	}
}

export const clearCart = () => {
	return {
		type: "CLEAR_CART"
	}
}

export const removeCart = (id) => {
	return {
		type: "REMOVE_CART",
		payload: id
	}
}

export const showModal = () => {
	return {
		type: "SHOW_MODAL"

	}
}

export const closeModal = () => {
	return{
		type: "CLOSE_MODAL"
	}
}

export const setTab = (t) => {
	return {
		type: "SET_TAB",
		payload: t
	}
}