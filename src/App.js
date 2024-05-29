import "./App.css"
import { MantineProvider } from "@mantine/core"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Media from "./pages/Media"
import Search from "./pages/Search"
import Genre from "./pages/Genre"
import About from "./pages/About"
import Request from "./pages/Request"
import HamburgerMenu from "./components/HamburgerMenu"

function App() {
  return (
    <MantineProvider>
      <div className='App'>
        <div className='navbar'>
          <Navbar />
        </div>
        <HamburgerMenu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/:media_type/:id' element={<Media />}></Route>
          <Route path='/genre/:media_type/:id/:name' element={<Genre />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/request' element={<Request />}></Route>
        </Routes>
        <Footer />
      </div>
    </MantineProvider>
  )
}

export default App
