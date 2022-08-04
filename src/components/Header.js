import React from 'react'
import {Link} from 'react-router-dom'
import style from './styles/Header.module.css'

const Header = () => {
  return (
    <div className={style.container}>
      <Link to="/" className={style.title}><h1>Bakery Shop</h1></Link>
      <Link className={style.link_button} to="/contact">Contacto</Link>
    </div>
  )
}

export default Header