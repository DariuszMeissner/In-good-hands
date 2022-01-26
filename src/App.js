import React, { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Login, Register } from './components/Auth'
import Home from './components/Home'
import { fetchHelpData } from './store/reducers/help-actions'
import { sendFormData } from './store/reducers/contactForm-actions'

let isInitial = true;

const App = () => {
  const dispatch = useDispatch()
  const formData = useSelector(state => state.contactForm)

  // fetching organization entries
  useEffect(() => {
    dispatch(fetchHelpData())
  }, [dispatch])

  // sending form data to firebase
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
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