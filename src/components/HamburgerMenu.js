import { Link } from "react-router-dom"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import LogoWhite from "../assets/logo-white.png"

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
  }

  return (
    <div className='hamburger-menu'>
      {isMenuOpen ? (
        <IconX className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={1.75} size={50} onClick={handleMenuToggle} />
      ) : (
        <IconMenu2 className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={2} size={50} onClick={handleMenuToggle} />
      )}

      <div className={`fullscreen-menu ${isMenuOpen ? "open" : ""}`}>
        <img className='hamburger-logo' src={LogoWhite} alt='logo'></img>
        <div className='menu-content'>
          <Link to='/' onClick={handleMenuToggle}>
            <button className='navbtn mobile'>home</button>
          </Link>
          <Link to='/about' onClick={handleMenuToggle}>
            <button className='navbtn mobile'>about</button>
          </Link>
          <Link to='/request' onClick={handleMenuToggle}>
            <button className='navbtn mobile'>request</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
