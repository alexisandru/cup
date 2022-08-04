import React, {useRef} from 'react'

import QuantityCounter from './QuantityCounter'
import ProgressiveImg from './ProgressiveImg'

import style from './styles/Card.module.css'
import gris from '../assets/compreso/gris.jpg'
import expand from '../assets/expand.svg'

import {useDispatch} from 'react-redux'
import {addCart} from '../actions'

const Card = ({info}) => {
	const dispatch = useDispatch()

	const refModal = useRef(0)

	const handleCant = (e) => {
		let data = {id: info.id, cant: e}
		// added redux
		dispatch(addCart(data))
	}

	const handleModal = (state) => {
		refModal.current.style.display = state;
	}
	
	const logo = require(`../assets/compreso/${info.image}`)

	return (
		<div  className={style.container}>
			<ProgressiveImg 
				src={logo}
				placeholderSrc={gris}
			/>
			<img 
				className={style.openImage} 
				src={expand} 
				alt="." 
				onClick={() => handleModal("block")}
			/>

			<div className={style.modal} ref={refModal}>
				<span onClick={()=>handleModal("none")} className={style.close}>&times;</span>
				<img src={logo} alt="." className={style.modal_content}/>
			</div>
			
			<div className={style.anim}>
				<h3 className={style.thumb_title}>{info.name}</h3>
				<p className={style.description}>{info.description}</p>
				<h4 className={style.price}>${info.price}c/u</h4>
				<QuantityCounter handle={handleCant}/>
			</div>
		</div>
	)
}

export default Card