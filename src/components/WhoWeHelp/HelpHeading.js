import React from 'react'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import './HelpHeading.scss'

export const HelpHeading = () => {
    return (
        <div className='m-b-4 flex flex-column flex-align-center'>
            <h2 className='h2'>Who we help?</h2>
            <DecorationSvg className='decoration m-b-6 m-t-1' />
        </div>
    )
}
