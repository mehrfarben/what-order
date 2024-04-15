import React from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='logo' />
      </Link>
      <div className='btns'>
        <Link to='/'>
          <button className='navbtn home'>Home</button>
        </Link>
        <Link to='/Movies'>
          <button className='navbtn home'>Movies</button>
        </Link>
        <Link to='/Shows'>
          <button className='navbtn home'>TV Shows</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
