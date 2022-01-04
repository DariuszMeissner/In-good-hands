import React from 'react'
import './AboutUsImage.scss'
import ImgAboutUs from '../../assets/images/People.jpg'

export const AboutUsImage = () => {
    return (
        <div className='aboutUs-image c-s-12 c-l-6'>
            <img src={ImgAboutUs} alt="people" />
        </div>
    )
}
