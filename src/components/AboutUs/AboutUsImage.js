import React from 'react'
import './AboutUsImage.scss'
import ImgAboutUs from '../../assets/images/People.jpg'
import { ClientSize } from '../UI/clientSize'

export const AboutUsImage = () => {
    const { isML, isXL } = ClientSize()

    return (
        <>
            {isML || isXL
                ?
                <div className='aboutUs-image c-s-12 c-l-6'>
                    <img src={ImgAboutUs} alt="people" />
                </div>
                : null}
        </>
    )
}
