import React, { useState, useRef, useEffect } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { IconMenu2 } from "@tabler/icons-react"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
        <IconMenu2 className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={2} size={40} onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div ref={menuRef}>
          <HamburgerMenu />
        </div>
      )}
    </div>
  )
}

export default Navbar
