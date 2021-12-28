import React from 'react'
import { NavAuth, NavMain } from '.'
import './NavMobileView.scss'
import { ClientSize } from '../UI/clientSize'



export const NavMobileView = ({ onClick, show }) => {
    const { isS, isM, isL, isXL } = ClientSize();

    const cssClasses = [
        "navMobileView",
        show === 'entering' || show === 'entered'
            ? "show-up"
            : show === 'exiting' ? "hide-up" : null,

        isS
            ? "mobile-width" 
            : isM ? "tablet-width" : null
    ]

    return (
        <div className={cssClasses.join(' ')}>
            <NavAuth />
            <NavMain />
            <button onClick={onClick}>Close</button>
        </div>
    )
}
