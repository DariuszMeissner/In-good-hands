import React from 'react'
import './Nav.scss'
import { NavAuth } from './NavAuth'
import { NavMain } from './NavMain'

export const Nav = () => {
    return (
        <nav>
            <NavAuth />
            <NavMain />
        </nav>
    )
}
