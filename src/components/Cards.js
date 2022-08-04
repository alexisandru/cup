import React from 'react'

import Card from './Card'
import Modal from './Modal'
import Form from './Form'

import style from './styles/Cards.module.css'
//import allData from '../assets/data.json'
import image from '../assets/carrito.svg'

import {  showModal  } from '../actions'
import {useSelector, useDispatch} from 'react-redux'

const Cards = () => {
	const dispatch = useDispatch()

	const finishBuy = useSelector(state => state.finishBuy)
	const items = useSelector(state => state.items)
	const cart = useSelector(state => state.cart)
	const show = useSelector(state => state.modal)
	const tab = useSelector(state=> state.tab)

	const cards = items
		.filter(item => item.type === tab)
		.map((info) => {
			return (
				<Card key={info.id} info={info} />
			)		
		})
	
	return (
		<div className={style.container}>
			{cards}
			<div className={style.carrito} onClick={() => dispatch(showModal())}>
				<img className={style.carrito_img} src={image} alt="."/>
				<span className={style.count}>{cart.length}</span>
			</div>
			{show && <Modal />}	
			{finishBuy && <Form />}
		</div>
	)
}

export default Cards