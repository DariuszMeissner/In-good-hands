import React from 'react'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import './HelpHeading.scss'

export const HelpHeading = () => {
    return (
        <>
            <h3 className='h3'>About us</h3>
            <DecorationSvg className='decoration m-b-6 m-t-1' />   
        </>
    )
}
