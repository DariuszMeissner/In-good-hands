import React from 'react'
import { ReactComponent as DecorationSvg } from '../../assets/images/Decoration.svg'
import './HeroIntroHeading.scss'
import { ClientSize } from '../UI/clientSize'

export const HeroIntroHeading = () => {
    const { isML, isXL } = ClientSize();

    const cssClasses = [
        'center m-b-2',
        isML || isXL
            ? 'h1'
            : 'h1-m'
    ]

    return (
        <>
            <h1 className={cssClasses.join(' ')}>
                <span>Start helping!</span>
                <span className='block'>Put your unwanted items in</span>
                <span>trusted hands</span></h1>
            <DecorationSvg />
        </>
    )
}
