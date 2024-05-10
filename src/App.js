import "./App.css"
import { MantineProvider } from "@mantine/core"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Media from "./pages/Media"
import Search from "./pages/Search"
import Genre from "./pages/Genre"

function App() {
  return (
    <MantineProvider>
      <div className='App'>
        <div className='navbar'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/:media_type/:id' element={<Media />}></Route>
          <Route path='/genre/:media_type/:id/:name' element={<Genre />}></Route>
        </Routes>
        <Footer />
      </div>
    </MantineProvider>
  )
}

export default App
