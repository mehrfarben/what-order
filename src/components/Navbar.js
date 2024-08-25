import "../App.css";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="px-[5%] py-2 fixed w-full h-20 flex z-50 justify-between border-b border-Ogray bg-Owhite">
      <Link to="/">
        <div 
          className="h-full w-[100px] bg-contain bg-no-repeat bg-center cursor-pointer" 
          style={{backgroundImage: `url(${Logo})`}}
          role="img"
          aria-label="logo"
        />
      </Link>
      <div className="flex items-center gap-5">
        <Link to="/about">
          <button
            className={`select-none text-xl lg:text-3xl ZT ${
              location.pathname === "/about" ? "bg-Oblue px-4 py-2 rounded-full text-Owhite" : "text-Oblue"
            } transition-none`}
          >
            about
          </button>
        </Link>
        <Link to="/request">
          <button
            className={`select-none text-xl lg:text-3xl ZT ${
              location.pathname === "/request" ? "bg-Oblue px-3 py-2 rounded-full text-Owhite" : "text-Oblue"
            } transition-none`}
          >
            request
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;