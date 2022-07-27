import React from 'react'

import style from './styles/Header.module.css'

const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Bakery Shop</h1>
      <a className={style.link_button} href="!#">Contact</a>
    </div>
  )
}

export default Header