import React, { useState } from 'react'
import { NavMobileIcon, NavMobileView } from '.'
import './NavMobile.scss'

export const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <NavMobileIcon onClick={handleClick} />
            {isOpen && <NavMobileView onClick={handleClick} />}
        </>
    )
}
