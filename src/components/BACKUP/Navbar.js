import React, { useState, useRef, useEffect } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { IconMenu2 } from "@tabler/icons-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.querySelector(".hamburger").addEventListener("click", closeMenu)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.querySelector(".hamburger").removeEventListener("click", closeMenu)
    }
  }, [])

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
        <IconMenu2 className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={2} size={50} onClick={() => (isMenuOpen ? closeMenu() : toggleMenu())} />
        {isMenuOpen && (
          <div ref={menuRef}>
            <div className='fullscreen-menu'>
              <div className='menu-content'>
                <Link to='/' onClick={closeMenu}>
                  <button className='navbtn mobile'>home</button>
                </Link>
                <Link to='/about' onClick={closeMenu}>
                  <button className='navbtn mobile'>about</button>
                </Link>
                <Link to='/request' onClick={closeMenu}>
                  <button className='navbtn mobile'>request</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
