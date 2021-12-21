import React from 'react'
import { NavAuth, NavMain, NavMobile } from '.'
import { ClientSize } from '../UI/clientSize'
import './Nav.scss'

export const Nav = () => {
    const { isS, isM } = ClientSize();

    return (
        <nav className='flex flex-column flex-align-start-s flex-align-end-l'>
            {(isS || isM) ? <NavMobile /> : (
                <>
                    <NavAuth />
                    <NavMain />
                </>
            )}
        </nav>
    )
}
