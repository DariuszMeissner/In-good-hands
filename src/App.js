import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Nav } from './components/Nav'
import { Login, Register } from './components/Auth'
import Home from './components/Home'
import { fetchHelpData } from './store/reducers/help-actions'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHelpData())
  }, [dispatch])

  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App