import React from 'react'
import './NavMobileView.scss'

export const NavMobileView = ({ onClick }) => {
    return (
        <div>
            Menu
            <button onClick={onClick}>Close</button>
        </div>
    )
}
