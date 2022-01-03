import React from 'react'
import { NavAuth, NavMain, NavMobile } from '.'
import { ClientSize } from '../UI/clientSize'
import './Nav.scss'

export const Nav = () => {
    const { isS, isM, isL } = ClientSize();

    return (
        <nav className='m-b-3 m-t-1 m-b-6-ml m-t-6-ml flex-ml flex-column-ml flex-align-end'>
            {(isS || isM || isL)
                ?
                <div className='flex flex-justify-between'>
                    <NavMobile />
                    <NavAuth />
                </div>
                : (
                    <>
                        <NavAuth />
                        <NavMain />
                    </>
                )}
        </nav>
    )
}
