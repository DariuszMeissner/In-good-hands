import React from 'react'
import './AboutUsImage.scss'
import ImgAboutUs from '../../assets/images/People.jpg'
import { ClientSize } from '../UI/clientSize'

export const AboutUsImage = () => {
    const { isL, isML, isXL } = ClientSize()

    return (
        <>
            {isL || isML || isXL
                ?
                <div className='aboutUs-image c-s-12 c-l-6'>
                    <img src={ImgAboutUs} alt="people" />
                </div>
                : null}
        </>
    )
}
