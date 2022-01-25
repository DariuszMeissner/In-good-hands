import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Login, Register } from './components/Auth'
import Home from './components/Home'
import { fetchHelpData } from './store/reducers/help-actions'
import { sendFormData } from './store/reducers/contactForm-actions'




const App = () => {
  const dispatch = useDispatch()
  const formData = useSelector(state => state.contactForm)

  useEffect(() => {
    dispatch(fetchHelpData())
  }, [dispatch])

  useEffect(() => {
    dispatch(sendFormData(formData))
  }, [formData, dispatch])

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