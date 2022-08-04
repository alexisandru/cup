import React from 'react'
import Header from './Header'

import style from './styles/ContactPage.module.css'

const ContactPage = () => {
	return (
		<div className={style.container}>
			<Header />
			<div className={style.contactContainer}>
				<form className={style.contactForm}>
					<label>Nombre:</label>
					<input type="name" name="name" id="name" />
					<label>Correo</label>
					<input type="email"  name="email" id="email" />
					<label>Numero de telefono:</label>
					<input type="number" name="subject" id="subject" />
					<label>Mensaje</label>
					<textarea className={style.contarFormMessage}></textarea>
					<div className={style.buttons}>
						<button className={style.button}>Cancelar</button>
						<button className={`${style.button} ${style.buttonSend}`} >Enviar</button>
					</div>
				</form>
			</div>	
		</div>
	)
}

export default ContactPage