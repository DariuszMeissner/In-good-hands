import React from 'react'
import { Link } from 'react-router-dom'
import './NavAuth.scss'

export const NavAuth = () => {
    return (
        <ul className='col-2'>
            <li className='col-2'><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )
}
