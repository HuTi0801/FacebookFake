import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import { Route, Routes } from 'react-router-dom'

import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
