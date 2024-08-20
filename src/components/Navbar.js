import "../App.css"
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='px-20 py-2 fixed w-screen h-20 flex z-50 justify-between border-b border-Ogray bg-Owhite'>
      <Link to='/'>
        <img className='h-full cursor-pointer safari-only' src={Logo} alt='logo' />
      </Link>
      <div className='flex items-center gap-10'>
        <Link to='/about'>
          <button className='select-none text-3xl ZT text-Oblue hover:text-Oblack'>about</button>
        </Link>
        <Link to='/request'>
          <button className='select-none text-3xl ZT text-Oblue hover:text-Oblack'>request</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
