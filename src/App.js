import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Nav } from './components/Nav'
import { Login, Register } from './components/Auth'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App