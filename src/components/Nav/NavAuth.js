import React from 'react'
import { Link } from 'react-router-dom'
import './NavAuth.scss'

export const NavAuth = () => {
    return (
        <ul className='flex-l m-b-4 fs-1-l'>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )
}
