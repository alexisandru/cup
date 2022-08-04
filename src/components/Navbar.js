import React from 'react'
import style from './styles/Navbar.module.css'

import {useDispatch, useSelector} from 'react-redux'
import {setTab} from '../actions'

const Navbar = (props) => {
	const dispatch = useDispatch()
	const tab = useSelector(state => state.tab)

	return (
		<div className={style.container}>
			<button 
				className={tab === "cupcake" ? style.button_active : style.button } 
				onClick={() => dispatch(setTab(("cupcake")))}
			>Cupcakes</button>
			<button 
				className={tab === "cake" ? style.button_active : style.button } 
				onClick={() => dispatch(setTab(("cake")))}
			>Cakes</button>
		</div>

	)
}

export default Navbar