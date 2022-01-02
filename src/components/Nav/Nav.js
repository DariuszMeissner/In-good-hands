import React from 'react'
import { NavAuth, NavMain, NavMobile } from '.'
import { ClientSize } from '../UI/clientSize'
import './Nav.scss'

export const Nav = () => {
    const { isS, isM, isL } = ClientSize();

    return (
        <nav className='m-b-3-s m-t-3-s m-b-6-l m-t-6-l flex-ml flex-column-ml flex-align-end'>
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
