import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/contact" element={<ContactPage/>}></Route>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
