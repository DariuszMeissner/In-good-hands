import React from 'react'
import { ReactComponent as BarsIcon } from '../../assets/icons/bars.svg'
import './NavMobileIcon.scss'

export const NavMobileIcon = ({ onClick }) => {
    return (
        <>
            <BarsIcon onClick={onClick}>Icon</BarsIcon>
        </>
    )
}
