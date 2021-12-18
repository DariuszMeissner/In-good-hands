import React from 'react'
import { ReactComponent as BarsIcon } from '../../assets/icons/bars.svg'
import './NavMobileIcon.scss'

export const NavMobileIcon = ({ onClick }) => {
    return (
        <>
            <BarsIcon className="icon-bars" onClick={onClick}>Icon</BarsIcon>
        </>
    )
}
