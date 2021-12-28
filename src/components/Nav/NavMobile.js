import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
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
            <Transition
                mountOnEnter
                unmountOnExit
                in={isOpen}
                timeout={300}>
                {state => (
                    <NavMobileView onClick={handleClick} show={state} />
                )}
            </Transition>
        </>
    )
}
