import React, { useState } from 'react'
import { NavMobileList } from '.'
import './NavMobile.scss'

export const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {isOpen ? '' : ''}
        </div>
    )
}
