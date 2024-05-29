import React, { useState, useRef, useEffect } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='logo safari-only' src={Logo} alt='logo' />
      </Link>
      <div className='btns'>
        <Link to='/about'>
          <button className='navbtn home'>about</button>
        </Link>
        <Link to='/request'>
          <button className='navbtn home'>request</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
