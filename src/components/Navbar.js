import React, { useState } from 'react'
import style from './styles/Navbar.module.css'

const Navbar = (props) => {
	
	const [tab, setTab] = useState("cupcake");

	const changeTab = (e) => {
		setTab(e)
		props.tab(e)
	}

	return (
		<div className={style.container}>
			<button 
				className={tab === "cupcake" ? style.button_active : style.button } 
				onClick={() => changeTab("cupcake")}
			>Cupcakes</button>
			<button 
				className={tab === "cake" ? style.button_active : style.button } 
				onClick={() => changeTab("cake")}
			>Cakes</button>
		</div>

	)
}

export default Navbar