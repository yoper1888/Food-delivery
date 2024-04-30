import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeorder/Placeholder'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Loginpop from './Components/LogInPopup/Loginpop'

function App() {
  const[showlogin,setshowlogin]=useState(false)
  return (
    <>
      {showlogin ? <Loginpop setshowlogin={setshowlogin}/>:<></>}
      <div className='app'>
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Order' element={<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App
