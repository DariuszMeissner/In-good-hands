import React from 'react'
import './NavMobileIcon.scss'

export const NavMobileIcon = ({ onClick }) => {
    return (
        <>
            <div className="icon-bars" onClick={onClick}></div>
        </>
    )
}
