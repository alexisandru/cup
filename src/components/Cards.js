import React, {useState, useEffect} from 'react'

import style from './styles/Cards.module.css'
import Card from './Card'
import Modal from './Modal'
import allData from './data.json'
import image from './carrito.svg'


const Cards = () => {
	const [data, setData] = useState([]);
	const [carritoItems, setCarritoItems] = useState([]);
	const [show, setShow] = useState(false)

	useEffect(() => {
		setData([...allData.data])
	}, [])


	const addMoreToCart = (e) => {
		let encontrado = carritoItems.findIndex(item =>item.id === e.id)

		if (encontrado === -1) {
			setCarritoItems([...carritoItems, e]);
		} else {
			const resultado = carritoItems.map(item => {
				if (item.id === e.id) {
					return {...item, cant: e.cant}
				} 
				return item
			})

			setCarritoItems(resultado)	
		}
	}


	const cards = data.map((info) => {
		return (
			<Card key={info.id} info={info} addMore={addMoreToCart}/>
		)
	})

	return (
		<div className={style.container}>
			{cards}
			<div className={style.carrito} onClick={() => setShow(true)}>
				<img className={style.carrito_img} src={image} alt="."/>
				<span className={style.count}>{carritoItems.length}</span>
			</div>
			{show && <Modal show={setShow} carrito={carritoItems} data={data}/>}
			
		</div>
	)
}

export default Cards