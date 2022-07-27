import React from 'react'

import style from './styles/Modal.module.css'


const Modal = ({show, carrito, data}) => {


	const items = carrito.map(item => {
		const encontrado = data.find(i => i.id === item.id);
		const logo = require(`../assets/compreso/${encontrado.image}`)
		return (
			<div className={style.item}>
				<img className={style.image} src={logo} alt="."/>
				<div className={style.description}>
					<p>Nombre: {encontrado.name}</p>
					<p>Cantidad: {item.cant}</p>	
				</div>
				<div>
					<p className={style.price}>${encontrado.price * item.cant}</p>
					<p className={style.priceUnit}>${encontrado.price}c/u</p>
				</div>
				
			</div>
		)
	})

	

	return (
		<div className={style.container}>
			<div className={style.content}>
				
				<h1>Carrito</h1>
				
				<div className={style.list_items}>
					{items}	
				</div>
				
				<div className={style.buttons}>
					<button className={style.button} onClick={() => show(false)}>Cerrar</button>
					<button className={style.btnComprar}>Comprar ahora</button>	
				</div>
			</div>
		</div>
	)
}

export default Modal