import React, {useState} from 'react'
import style from './styles/Form.module.css'
import done from '../assets/done.svg'


import { finish, clearCart } from '../actions'
import { useDispatch} from 'react-redux'

const Form = () => {
	const [finishBuy, setFinishBuy] = useState(false)
	const dispatch = useDispatch()

	const showFinishBuy = (e) => {
		e.preventDefault()
		setFinishBuy(true)
		setTimeout(() => clearbuy(), 5000)
	}

	const clearbuy = () => {
		dispatch(clearCart())
		dispatch(finish(false))
	}
	return (
		<div className={style.container}>
			<div className={style.content}>
				{!finishBuy
					? 
					<>
						<h4>Finalizar compra</h4>
						<form className={style.form}>
							<label>Nombre:</label>
							<input type="name" name="name" id="name" />
							<label>Correo</label>
							<input type="email"  name="email" id="email" />
							<label>Numero de telefono:</label>
							<input type="text" name="subject" id="subject" />
							<label>Mensaje</label>
							<input type="text" name="message" id="message" />
							<div className={style.buttons}>
								<button className={style.button} onClick={() => dispatch(finish(false))}>Cancelar</button>
								<button className={style.buttonComprar} onClick={showFinishBuy}>Enviar</button>
							</div>
						</form>
					</>
					: 
					<div className={style.finish}>
						<img src={done} alt="." className={style.done}/>
						<p className={style.done_title}>Compra realizada</p>
						<p className={style.done_s}>Nos comunicaremos con usted</p>		
					</div>
				}
				
			</div>
		
		</div>
	)
}

export default Form