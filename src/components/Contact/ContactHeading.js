import React from 'react'
import './ContactHeading.scss'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'

export const ContactHeading = () => {
    return (
        <div className=''>
            <h3 className='h3'>Contact with us</h3>
            <DecorationSvg className='decoration m-b-6 m-t-1' />
        </div>
    )
}
