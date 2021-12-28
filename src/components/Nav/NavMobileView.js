import React from 'react'
import { NavAuth, NavMain } from '.'
import './NavMobileView.scss'
import { ClientSize } from '../UI/clientSize'

export const NavMobileView = ({ onClick, show }) => {
    const { isS, isM } = ClientSize();

    const cssClasses = [
        "navMobileView row p-4",
        show === 'entering' || show === 'entered'
            ? "show-up"
            : show === 'exiting' ? "hide-up" : null,

        isS
            ? "mobile-width"
            : isM ? "tablet-width" : null
    ]

    return (
        <div className={cssClasses.join(' ')}>
            
            {/* menu mobile grid */}
            <div className='c-xs-8'>
                <NavAuth />
            </div>
            <div className='c-xs-4 flex flex-justify-end'>
                <button className='icon-close p-3-s' onClick={onClick} />
            </div>
            <div className='c-xs-12'>
                <NavMain />
            </div>
        </div>
    )
}
