import React from 'react'
import './ContactHeading.scss'
import { ReactComponent as DecorationSvg } from '../../../assets/images/Decoration.svg'

export const ContactHeading = () => {
    return (
        <div className='flex flex-column flex-align-center'>
            <h2 className='h2'>Contact with us</h2>
            <DecorationSvg className='decoration m-b-6 m-t-1' />
        </div>
    )
}
