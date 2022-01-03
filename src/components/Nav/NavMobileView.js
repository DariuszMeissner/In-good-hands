import React from 'react'
import { NavMain } from '.'
import './NavMobileView.scss'
import { ClientSize } from '../UI/clientSize'

export const NavMobileView = ({ onClick, show }) => {
    const { isS, isM, isL } = ClientSize();

    const cssClasses = [
        "navMobileView row",
        show === 'entering' || show === 'entered'
            ? "show-up"
            : show === 'exiting' ? "hide-up" : null,

        isS
            ? "mobile-width"
            : (isM || isL) ? "tablet-width" : null
    ]

    return (
        <div className={cssClasses.join(' ')}>

            {/* menu mobile grid */}
            <div className='c-s-8'>
                <NavMain onClick={onClick}/>
            </div>
            <div className='c-s-4 flex flex-justify-end'>
                <button className='icon-close p-3-s' onClick={onClick} />
            </div>
        </div>
    )
}
