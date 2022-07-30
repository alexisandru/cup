import React, {useState} from 'react'

import Header from './Header'
import Title from './Title'
import Navbar from './Navbar'
import Cards from './Cards'

import style from './styles/Home.module.css'

const Home = () => {
  const [type, setType] = useState("cupcake");

  const handleTab = (tab) => {
    setType(tab)
  }

  return (
    <div className={style.container}>
      <Header />
      <Title />  
      <Navbar tab={handleTab}/>
      <Cards tab={type}/>
    </div>
  )
}

export default Home