import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

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
  }, [menuRef])

  return (
    <div className='hamburger-menu' ref={menuRef}>
      {isMenuOpen ? (
        <IconX className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={1.75} size={50} onClick={() => setIsMenuOpen(false)} />
      ) : (
        <IconMenu2 className={`hamburger ${isMenuOpen ? "white" : ""}`} stroke={2} size={50} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      )}
      {isMenuOpen && (
        <div className='fullscreen-menu'>
          <div className='menu-content'>
            <Link to='/' onClick={() => setIsMenuOpen(false)}>
              <button className='navbtn mobile'>home</button>
            </Link>
            <Link to='/about' onClick={() => setIsMenuOpen(false)}>
              <button className='navbtn mobile'>about</button>
            </Link>
            <Link to='/request' onClick={() => setIsMenuOpen(false)}>
              <button className='navbtn mobile'>request</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
