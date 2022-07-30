import React, {useState, useEffect} from 'react'

import Card from './Card'
import Modal from './Modal'
import Form from './Form'

import style from './styles/Cards.module.css'
import allData from '../assets/data.json'
import image from '../assets/carrito.svg'


const Cards = ({tab}) => {
	const [data, setData] = useState([]);
	const [carritoItems, setCarritoItems] = useState([]);
	const [show, setShow] = useState(false)
	const [finishBuy, setFinishBuy] = useState(false)
	
	useEffect(() => {
		setData([...allData.data])
	}, [])

	const updateCart = (e) => {
		const resultado = carritoItems.map(item => {
			if (item.id === e.id) {
				return {...item, cant: e.cant}
			} 
			return item
		})
		setCarritoItems(resultado)	
	}

	const deleteCart = (e) => {
		const nuevo = carritoItems.filter(item => item.id !== e)
		setCarritoItems(nuevo)
	}

	const addMoreToCart = (e) => {
		let encontrado = carritoItems.findIndex(item =>item.id === e.id)
		if (encontrado === -1) {
			setCarritoItems([...carritoItems, e]);
		} else {
			updateCart(e)
		}
	}

	const cards = data
		.filter(item => item.type === tab)
		.map((info) => {
			return (
				<Card key={info.id} info={info} addMore={addMoreToCart}/>
			)		
		})


	const handleFinish = () => { 
		setShow(false)
		setFinishBuy(true)
	}

	const closeForm = (success) => {
		if (success) {
			setCarritoItems([])
			setFinishBuy(false)
		} else {
			setFinishBuy(false)
		}
	}

	return (
		<div className={style.container}>
			{cards}
			<div className={style.carrito} onClick={() => setShow(true)}>
				<img className={style.carrito_img} src={image} alt="."/>
				<span className={style.count}>{carritoItems.length}</span>
			</div>
			{show && <Modal finish={handleFinish} show={setShow} carrito={carritoItems} data={data} deleteCart={deleteCart}/>}	
			{finishBuy && <Form closeForm={closeForm} />}
		</div>
	)
}

export default Cards