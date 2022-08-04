import counterReducer from './counter'
import loggedReducer from './isLogged'
import finishBuyReducer from './finishBuy'
import itemsReducer from './itemsReducer'
import cartReducer from './cart'
import modalReducer from './modalReducer'
import tabReducer from './tabReducer'

import {combineReducers} from 'redux'



const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	finishBuy: finishBuyReducer,
	items: itemsReducer,
	cart: cartReducer,
	modal: modalReducer,
	tab: tabReducer
})

export default allReducers