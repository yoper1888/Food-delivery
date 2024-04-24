import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
 import Placeholder from './pages/Placeorder/Placeholder'

function App() {
  return (
    <div className='app'>
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<Placeholder/>}/>
     </Routes>
    </div>
  )
}

export default App
