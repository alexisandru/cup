import React, {useState} from 'react'

import style from './styles/QuantityCounter.module.css'

const QuantityCounter = ({handle}) => {

	const [cant, setCant] = useState(0);
	
	const decrement = () => {
		if (cant > 0) {
			setCant(cant - 1)
		}
	}

	const increment = () => {
		setCant(cant + 1)
	}
	
	const handleCarrito = () => {
		handle(cant);
	}

	return (
		<div className={style.select_counter}>					
			<div className={style.btn_cant}>
				<button className={style.counter_btn} onClick={() => decrement()}>-</button>
				<p className={style.counter_num}>{cant}</p>
				<button className={style.counter_btn} onClick={() => increment()}>+</button>
			</div>
			{cant === 0 
				?<button className={style.to_cart_disable}>Añadir al carro</button>
				:<button className={style.to_cart} onClick={() => handleCarrito()}>Añadir al carro</button>
			}
			
		</div>
	)
}

export default QuantityCounter