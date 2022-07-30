import React from 'react'

import style from './styles/Modal.module.css'

const Modal = ({show, carrito, data, deleteCart, finish}) => {

	const items = carrito.map(item => {
		const encontrado = data.find(i => i.id === item.id);
		const logo = require(`../assets/compreso/${encontrado.image}`)
		return (
			<div className={style.item}>
				<img className={style.image} src={logo} alt="."/>
				<div className={style.description}>
					<p>{encontrado.name}</p>
					<p>Cantidad: {item.cant}</p>	
				</div>
				<div>
					<p className={style.price}>${encontrado.price * item.cant}</p>
					<p className={style.priceUnit}>${encontrado.price}c/u</p>
				</div>
				<span className={style.close} onClick={() => deleteCart(item.id)}>&times;</span>
			</div>
		)
	})

	
	return (
		<div className={style.container}>
			<div className={style.content}>
				
				<h1>Carrito</h1>
				
				<div className={style.list_items}>
					{items.length === 0 ? <h4 className={style.carrito_vacio}>Carrito vacio</h4> : items}	
				</div>
				
				<div className={style.buttons}>
					<button className={style.button} onClick={() => show(false)}>Cerrar</button>
					<button className={items.length !== 0 ? style.btnComprar : style.btnComprar_disable} onClick={finish}>Comprar ahora</button>	
				</div>
			</div>
		</div>
	)
}

export default Modal