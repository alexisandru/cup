import React from 'react'

import Header from './Header'
import Cards from './Cards'
import Title from './Title'

import style from './styles/Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <Title />
      <p className={style.products}>Products</p>
      <Cards />
    </div>
  )
}

export default Home