import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

export default function Navbar({ setshowlogin }) {
  const [menu, setmenu] = useState("home")
  return (
    <div className='navbar'>
      <Link to={'/'}> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explorle-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setmenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={'/Cart'}> <img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
          <button onClick={() => setshowlogin(true)}>Sign In</button>
        </div>
      </div>

    </div>
  )
}
