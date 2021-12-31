import React from 'react'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import './HeroIntroHeading.scss'

export const HeroIntroHeading = () => {
    return (
        <>
            <h1 className='h1 h1-m center m-b-2'>
                <span>Start helping!</span>
                <span className='block'>Put your unwanted items in</span>
                <span>trusted hands</span></h1>
            <DecorationSvg />
        </>
    )
}
