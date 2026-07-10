import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Search from './components/Search'
import Discharge from './components/Discharge'
import ViewPage from './components/ViewPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

      <Route path='/' element={<Register/>}/>
      <Route path='/se' element={<Search/>}/>
      <Route path='/di' element={<Discharge/>}/>
      <Route path='/vi' element={<ViewPage/>}/>


      

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
