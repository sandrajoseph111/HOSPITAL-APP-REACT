import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './components/Register'
import Search from './components/Search'
import Discharge from './components/Discharge'
import ViewPage from './components/ViewPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register />
      <Search />
      <Discharge />
      <ViewPage />
    </>
  )
}

export default App
