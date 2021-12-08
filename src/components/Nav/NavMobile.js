import React, { useState } from 'react'
import { NavMobileView } from '.'
import './NavMobile.scss'

export const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <NavMobileView />
            {isOpen ? '' : ''}
        </div>
    )
}
