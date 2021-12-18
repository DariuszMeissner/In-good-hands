import React from 'react'
import { NavAuth, NavMain } from '.'
import './NavMobileView.scss'

export const NavMobileView = ({ onClick }) => {
    return (
        <div className='navMobileView'>
            <NavAuth />
            <NavMain />
            <button onClick={onClick}>Close</button>
        </div>
    )
}
