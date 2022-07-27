import React from 'react'
import gris from '../assets/compreso/gris.jpg'

import style from './styles/Card.module.css'

import QuantityCounter from './QuantityCounter'
import ProgressiveImg from './ProgressiveImg'

const Card = ({addMore, info}) => {

	const handleCant = (e) => {
		let data = {id: info.id, cant: e}

		addMore(data)
	}
	
	const logo = require(`../assets/compreso/${info.image}`)

	// style={{backgroundImage: `url(${logo})`}}

	return (
		<div  className={style.container}>
			
			<ProgressiveImg 
				src={logo}
				placeholderSrc={gris}
			/>
			
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