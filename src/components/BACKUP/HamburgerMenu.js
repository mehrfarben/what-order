import { Link } from "react-router-dom"

const HamburgerMenu = () => {
  return (
    <div>
      <div className='fullscreen-menu'>
        <div className='menu-content'>
          <Link to='/about'>
            <button className='navbtn mobile'>about</button>
          </Link>
          <Link to='/request'>
            <button className='navbtn mobile'>request</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
