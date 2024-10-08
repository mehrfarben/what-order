import "./App.css"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Media from "./pages/Media"
import Search from "./pages/Search"
import Genre from "./pages/Genre"
import About from "./pages/About"
import Request from "./pages/Request"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
<>
      <ScrollToTop />
      <div className='bg-Owhite min-h-screen relative'>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search/:name' element={<Search />}></Route>
          <Route path='/:media_type/:id' element={<Media />}></Route>
          <Route path='/genre/:media_type/:id/:name' element={<Genre />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/request' element={<Request />}></Route>
        </Routes>
      </div>
      </>
  )
}

export default App
