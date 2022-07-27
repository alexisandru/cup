import React, {useState, useEffect} from 'react'

import style from './styles/Card.module.css'

import QuantityCounter from './QuantityCounter'

const Card = ({addMore, info}) => {

	const handleCant = (e) => {
		let data = {id: info.id, cant: e}

		addMore(data)
	}
	
	return (
		<div style={{backgroundImage: `url(${info.image})`}} className={style.container}>
			<div className={style.anim}>
				<h3 className={style.thumb_title}>{info.name}</h3>
				<p className={style.description}>{info.description}</p>
				<h4 className={style.price}>{info.price}c/u</h4>
				<QuantityCounter handle={handleCant}/>
			</div>
		</div>
	)
}

export default Card