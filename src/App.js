import "./App.css"
import { MantineProvider } from "@mantine/core"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Shows from "./pages/Shows"

function App() {
  return (
    <MantineProvider>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Movies' element={<Movies />}></Route>
          <Route path='/Shows' element={<Shows />}></Route>
        </Routes>
      </div>
    </MantineProvider>
  )
}

export default App
