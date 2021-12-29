import React from 'react'
import './NavMobileIcon.scss'

export const NavMobileIcon = ({ onClick }) => {
    return (
        <>
            <button className="icon-bars" onClick={onClick}></button>
        </>
    )
}
