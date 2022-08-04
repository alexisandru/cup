import React from 'react'

import Header from './Header'
import Title from './Title'
import Navbar from './Navbar'
import Cards from './Cards'

import style from './styles/Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <Title />  
      <Navbar />
      <Cards />
    </div>
  )
}

export default Home