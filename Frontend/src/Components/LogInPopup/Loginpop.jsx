import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
function Loginpop({ setshowlogin }) {
  const [currstate, setcurrstate] = useState("login")
  return (
    <div className='login-popup'>
      <form className="login-popup-contenier">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currstate === "login" ? <></> : <input type='text' placeholder='your name' required />}

          <input type='email' placeholder='your email' required />
          <input type='password' placeholder='your password' required />
        </div>
        <button>{currstate === "SIGN UP" ? "Create Account" : "login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By contiuned,I agree to term of use and privacy policy</p>
        </div>
        {currstate === "login" ? <p>Create a new account ? <span onClick={() => setcurrstate("SIGN UP")}>Click Here</span></p> :
          <p>Already have an account ? <span onClick={() => setcurrstate("login")}>login Here</span></p>}

      </form>
    </div>
  )
}

export default Loginpop
