import React, { useState } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { IconMenu2 } from "@tabler/icons-react"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img className='logo' src={Logo} alt='logo' />
      </Link>
      <div className='btns'>
        <Link to='/about'>
          <button className='navbtn home'>about</button>
        </Link>
        <Link to='/request'>
          <button className='navbtn home'>request</button>
        </Link>
        <IconMenu2 className='hamburger' stroke={2} size={40} onClick={toggleMenu} />
      </div>
      {isMenuOpen && <HamburgerMenu />}
    </div>
  )
}

export default Navbar
